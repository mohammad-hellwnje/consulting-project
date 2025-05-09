// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../img/just-test/LOGO (1).png";
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
        className={`bg-amber-400 flex flex-row-reverse items-center justify-between h-[100px] px-6 shadow-lg fixed z-[1000] transition-all duration-500 
        ${
          scrolling
            ? "w-full top-0 left-0 rounded-none"
            : "w-[88%] top-12 left-[6%] rounded-xl"
        }`}
      >
        <Link to="/">
          <img src={logo} alt="logo" className="w-[100px]" />
        </Link>

        <ul className="hidden flex-row-reverse md:flex items-center gap-8">
          {NavData.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                end
                className="text-black hover:text-white transition"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2 text-sm">
          <NavLink to="/">تسجيل الدخول</NavLink>
         
          <NavLink to="/">إنشاء حساب</NavLink>
        </div>

        {/* زر القائمة الجانبية في الجوال */}
        <div className="md:hidden">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </nav>

      {/* مكون القائمة الجانبية */}
      <SideBar menuOpen={menuOpen} closeMenu={closeMenu} />
    </>
  );
}
