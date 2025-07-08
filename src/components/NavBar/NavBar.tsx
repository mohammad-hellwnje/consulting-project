// Navbar.jsx
import  { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "../SideBar/SideBar";
import Logo from "../ui/Logo/Logo";
import LinkUl from "./LabScreen/LinkUl";
import AuthBtn from "../ui/Button/AuthBtn";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`mx-[5%] sticky px-8 py-3 bg-white/20 shadow-sm  flex  items-center justify-between z-[1000] transition-all duration-500 
          ${scrolling
      ? "w-full top-0 left-0 rounded-none"
      : " mt-6 rounded-[21px]"}`}>
        {/* الشعار + الروابط */}
        <div className="flex gap-4.5  items-center">
          <Logo/>
          {/* روابط التنقل — تظهر فقط في الشاشات الكبيرة */}
          <LinkUl/>
        </div>
        {/* أزرار تسجيل الدخول — تظهر فقط في الشاشات الكبيرة */}
        <div className="hidden lg:flex  items-center gap-8">
           <AuthBtn text="تسجيل الدخول" path="/auth/login" forceActive={true} />
           <AuthBtn text="إنشاء حساب" path="/auth/signup" />
        </div>

        {/* أيقونة القائمة الجانبية — تظهر فقط في الموبايل */}
        <div className="lg:hidden">
          <FaBars
            className="text-2xl text-white cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </nav>

      <SideBar menuOpen={menuOpen} closeMenu={closeMenu} />

    </>
  );
}
