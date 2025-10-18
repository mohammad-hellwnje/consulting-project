import { useState, useEffect } from "react";
import { FaBars, FaSignOutAlt, FaCog } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Logo from "../ui/Logo/Logo";
import LinkUl from "./LabScreen/LinkUl";
import AuthBtn from "../ui/Button/AuthBtn";
import { useCurrentUser, useLogout } from "../../hooks/useAuth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { data: user, isLoading } = useCurrentUser();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();
  const location = useLocation(); // 🔹 لمعرفة الصفحة الحالية

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleLogout = () => logout();

  // 🔹 نحدد ما إذا كانت الصفحة الحالية "صفحة خاصة" نريد فيها لون مختلف
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isAuthPage = location.pathname.startsWith("/servdetails");

  // 🔹 نتحكم في لون الخلفية حسب الصفحة الحالية أو حالة التمرير
  const navBg = isDashboard
    ? "bg-[#3B2241]" // لون غامق للداشبورد
    : isAuthPage
    ? " bg-primary" // لون فاتح لصفحات الدخول
    : scrolling
    ? "bg-[#3B2241]" // عند التمرير
    : "bg-white/20"; // في الصفحة الرئيسية بدون تمرير

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 
        ${scrolling ? "rounded-none" : "lg:mt-6 mt-3"}`}
      >
        <div
          className={`margin-global 2xl:py-6 2xl:px-9 xl:px-8 lg:px-7 px-5 py-3 
          ${navBg} shadow-sm flex items-center justify-between rounded-[21px]`}
        >
          {/* الشعار + الروابط */}
          <div className="flex laptop:gap-4.5 gap-2.5 items-center">
            <Logo />
            <div className="hidden lg:flex">
              <LinkUl />
            </div>
          </div>

          {/* أزرار المستخدم */}
          <div className="hidden lg:flex items-center xl:gap-6 lg:gap-4">
            {!isLoading && user ? (
              <div className="flex items-center gap-4">
                {user.role === "admin" && (
                  <NavLink
                    to="/dashboard"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-white transition-colors"
                    style={{
                      backgroundColor: "var(--color-btnColor)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-btnColor)")
                    }
                  >
                    <FaCog className="w-4 h-4" />
                    <span className="hidden xl:inline">لوحة التحكم</span>
                  </NavLink>
                )}

                <span className="text-white font-medium">{user.fullName}</span>

                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "var(--color-textbtnColor)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--color-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--color-textbtnColor)")
                  }
                >
                  <FaSignOutAlt className="w-4 h-4" />
                  <span className="hidden xl:inline">
                    {isLoggingOut ? "جاري الخروج..." : "خروج"}
                  </span>
                </button>
              </div>
            ) : (
              <>
                <AuthBtn
                  text="تسجيل الدخول"
                  path="/auth/login"
                  forceActive={true}
                />
                <AuthBtn text="إنشاء حساب" path="/auth/signup" />
              </>
            )}
          </div>

          {/* أيقونة الموبايل */}
          <div className="lg:hidden">
            <FaBars
              className={`text-xl cursor-pointer ${
                isDashboard || scrolling ? "text-white" : "text-black"
              }`}
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>
      </nav>

      <SideBar menuOpen={menuOpen} closeMenu={closeMenu} />
    </>
  );
}
