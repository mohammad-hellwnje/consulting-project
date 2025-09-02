import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/useAuth';
import { isAdminRoute, secureLog } from '../../config/environment';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAdmin?: boolean;
}

export default function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
  const { data: user, isLoading, error } = useCurrentUser();
  const location = useLocation();

  // أثناء التحميل
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-purple-700">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  // إذا لم يكن هناك مستخدم أو حدث خطأ
  if (!user || error) {
    secureLog("Access denied: No user or error", { path: location.pathname, error });
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // إذا كان المسار يتطلب صلاحيات أدمن
  if (requireAdmin && user.role !== 'admin') {
    secureLog("Access denied: Admin required", { 
      path: location.pathname, 
      userRole: user.role 
    });
    return <Navigate to="/" replace />;
  }

  // إذا كان المسار من مسارات الأدمن ولكن المستخدم ليس أدمن
  if (isAdminRoute(location.pathname) && user.role !== 'admin') {
    secureLog("Access denied: Admin route accessed by non-admin", { 
      path: location.pathname, 
      userRole: user.role 
    });
    return <Navigate to="/" replace />;
  }

  secureLog("Access granted", { 
    path: location.pathname, 
    userRole: user.role,
    userId: user._id 
  });

  return <>{children}</>;
}
