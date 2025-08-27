import { useCurrentUser } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { data: user, isLoading } = useCurrentUser();

  // إذا كان المستخدم غير مسجل دخول أو ليس أدمن، إعادة توجيه
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">جاري التحميل...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  if (user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            لوحة التحكم - مرحباً {user.name}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* إحصائيات المستخدمين */}
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">المستخدمين</h3>
              <p className="text-3xl font-bold text-purple-600">150</p>
              <p className="text-sm text-purple-600">إجمالي المستخدمين</p>
            </div>

            {/* إحصائيات الخدمات */}
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">الخدمات</h3>
              <p className="text-3xl font-bold text-blue-600">25</p>
              <p className="text-sm text-blue-600">خدمة نشطة</p>
            </div>

            {/* إحصائيات الطلبات */}
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">الطلبات</h3>
              <p className="text-3xl font-bold text-green-600">89</p>
              <p className="text-sm text-green-600">طلب جديد</p>
            </div>
          </div>

          {/* قائمة الإجراءات */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">الإجراءات السريعة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors">
                إدارة المستخدمين
              </button>
              <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors">
                إدارة الخدمات
              </button>
              <button className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors">
                عرض الطلبات
              </button>
              <button className="bg-orange-600 text-white p-4 rounded-lg hover:bg-orange-700 transition-colors">
                التقارير
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
