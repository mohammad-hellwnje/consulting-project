// Navbar.jsx
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Logo from "../ui/Logo/Logo";
import LinkUl from "./LabScreen/LinkUl";
import AuthBtn from "../ui/Button/AuthBtn";
import { useCurrentUser, useLogout } from "../../hooks/useAuth";
import UserMenu from "../ui/UserMenu/UserMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { data: user, isLoading } = useCurrentUser();
  const { mutate: logout } = useLogout();

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
<nav
  className={`fixed  top-0 left-0 w-full z-[1000] transition-all duration-500 
    ${scrolling ? "rounded-none" : "lg:mt-6 mt-3"}`}>
  
  <div className={`margin-global 
    2xl:py-6 2xl:px-9  
    xl:px-8 lg:px-7 
    px-5 py-3 ${scrolling ? ' bg-[#3B2241]' : ' bg-white/20'} shadow-sm flex items-center justify-between rounded-[21px]`}>
    {/* الشعار + الروابط */}
    <div className="flex  laptop:gap-4.5 gap-2.5 items-center">
      <Logo />
      <div className=" hidden lg:flex">
      <LinkUl />
      </div>
    </div>
    {/* أزرار المستخدم */}
    <div className="hidden lg:flex items-center xl:gap-8 lg:gap-4">
      {!isLoading && user ? (
        <div className="flex items-center gap-4">
          {/* زر الداش بورد للأدمن */}
          {user.role === 'admin' && (
            <NavLink
              to="/dashboard"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              لوحة التحكم
            </NavLink>
          )}

          {/* اسم المستخدم */}
          <span className="text-white font-medium">مرحباً، {user.name}</span>

          {/* زر تسجيل الخروج */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            تسجيل الخروج
          </button>
        </div>
      ) : (
        <>
          <AuthBtn text="تسجيل الدخول" path="/auth/login" forceActive={true} />
          <AuthBtn text="إنشاء حساب" path="/auth/signup" />
        </>
      )}
    </div>
    {/* أيقونة الموبايل */}
    <div className="lg:hidden">
      <FaBars
        className="text-xl text-white cursor-pointer"
        onClick={() => setMenuOpen(true)}
      />
    </div>
  </div>
</nav>

<SideBar menuOpen={menuOpen} closeMenu={closeMenu} />


    </>
  );
}
