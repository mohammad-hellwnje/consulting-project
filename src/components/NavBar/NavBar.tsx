// Navbar.jsx
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

import logo from "../../img/general/LOGO (1).png";
import { NavData } from "../../Data/NavData";
import SideBar from "../SideBar/SideBar";

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
        className={`bg-[#FFFFFF33] shadow-[0px_10px_49px_-11px_rgba(126,57,148,0.34)] flex flex-row-reverse items-center justify-between h-[100px] fixed z-[1000] transition-all duration-500 px-8 py-[29px]
  ${
    scrolling
      ? "w-full top-0 left-0 rounded-none"
      : "w-[88.2815%] top-6 left-[5.85925%] rounded-[21px]"
  }`}
      >
        {/* الشعار + الروابط */}
        <div className="flex flex-row-reverse items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[177px] ms-[17px]" />
          </Link>

          {/* روابط التنقل — تظهر فقط في الشاشات الكبيرة */}
          <ul className="hidden lg:flex  flex-row-reverse items-center   2xl:font-semibold text-[16px]  leading-[120%]">
            {NavData.map((item, index) => (
              <li key={index} className="flex items-center  text-[16px] ">
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center justify-center  ms-12 rounded-[4px] transition ${
                      isActive
                        ? "bg-[#F5F5F5] text-[#7E3994] w-[158px] h-[42px] "
                        : "text-white hover:text-[#7E3994] "
                    }`
                  }
                >
                  {index === 2 && <FaAngleDown className="mt-0.5" />}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* أزرار تسجيل الدخول — تظهر فقط في الشاشات الكبيرة */}
        <div className="hidden lg:flex flex-row-reverse items-center  w-[25%]">
          <NavLink
            to="/"
            className="font-bold text-[16px]  leading-[100%] text-white bg-[#CB88BB40] rounded-[4px] py-3  w-[38.820638821%] h-[42px] text-center"
          >
            تسجيل الدخول
          </NavLink>
          <NavLink
            to="/"
            className="font-bold text-[16px]  leading-[100%] text-white border-[2px] rounded-[4px] py-3  me-8 w-[38.820638821%] h-[42px] text-center"
          >
            إنشاء حساب
          </NavLink>
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

      <SideBar menuOpen={menuOpen} closeMenu={closeMenu} />
    </>
  );
}
