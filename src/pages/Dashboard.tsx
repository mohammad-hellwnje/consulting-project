import { useCurrentUser } from "../hooks/useAuth";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Dashboard() {
  const { data: user } = useCurrentUser();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* زر العودة للـ Home */}
          <div className="flex justify-end mb-6">
            <NavLink
              to="/"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
              style={{
                backgroundColor: "var(--color-btnColor)",
                color: "white",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-btnColor)")
              }
            >
              <FaHome className="w-4 h-4" />
              الرئيسية
            </NavLink>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            لوحة التحكم - مرحباً {user?.fullName}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* إحصائيات المستخدمين */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: "#F5E9F7" }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--color-primary)" }}>
                المستخدمين
              </h3>
              <p className="text-3xl font-bold" style={{ color: "var(--color-btnColor)" }}>
                150
              </p>
              <p className="text-sm" style={{ color: "var(--color-textbtnColor)" }}>
                إجمالي المستخدمين
              </p>
            </div>

            {/* إحصائيات الخدمات */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: "#EBEBEB" }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--color-primary)" }}>
                الخدمات
              </h3>
              <p className="text-3xl font-bold" style={{ color: "var(--color-btnColor)" }}>
                25
              </p>
              <p className="text-sm" style={{ color: "var(--color-textbtnColor)" }}>
                خدمة نشطة
              </p>
            </div>

            {/* إحصائيات الطلبات */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: "#F0F8F4" }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--color-primary)" }}>
                الطلبات
              </h3>
              <p className="text-3xl font-bold" style={{ color: "var(--color-btnColor)" }}>
                89
              </p>
              <p className="text-sm" style={{ color: "var(--color-textbtnColor)" }}>
                طلب جديد
              </p>
            </div>
          </div>

          {/* قائمة الإجراءات */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">الإجراءات السريعة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                className="p-4 rounded-lg transition-colors"
                style={{ backgroundColor: "var(--color-btnColor)", color: "white" }}
              >
                إدارة المستخدمين
              </button>
              <button
                className="p-4 rounded-lg transition-colors"
                style={{ backgroundColor: "var(--color-primary)", color: "white" }}
              >
                إدارة الخدمات
              </button>
              <button
                className="p-4 rounded-lg transition-colors"
                style={{ backgroundColor: "var(--color-textbtnColor)", color: "white" }}
              >
                عرض الطلبات
              </button>
              <button
                className="p-4 rounded-lg transition-colors"
                style={{ backgroundColor: "var(--color-authbtnActive)", color: "var(--color-primary)" }}
              >
                التقارير
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
