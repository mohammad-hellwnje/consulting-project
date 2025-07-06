import logo from "../../img/just-test/LOGO (1).png";
import { NavData } from "../../Data/NavData";
import { Link, NavLink } from "react-router-dom";
import  { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`bg-amber-400 flex items-center justify-between h-[100px] px-6 shadow-lg fixed z-[1000] transition-all duration-500 
        ${
          scrolling
            ? "w-full top-0 left-0 rounded-none"
            : "w-[88%] top-12 left-[6%] rounded-xl"
        }`}
      >
        <Link to="/">
          <img src={logo} alt="logo" className="w-[100px]" />
        </Link>

        {/* Links (desktop) */}
        <ul className="hidden md:flex items-center gap-8">
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

        {/* Login/Signup (desktop) */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          <NavLink to="/auth/login">تسجيل الدخول</NavLink>
          <span>/</span>
          <NavLink to="/auth/signup">إنشاء حساب</NavLink>
        </div>

        {/* Menu button (mobile) */}
        <div className="md:hidden">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </nav>

      {/* Fullscreen Offcanvas Menu - Glassmorphic */}
      <div
        className={`fixed top-0 left-0 h-screen w-screen z-[1001] transition-all duration-300 ease-in-out 
        ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } 
        backdrop-blur-md bg-white/30`}
      >
        <div className="flex justify-end p-4">
          <FaTimes
            className="text-3xl text-black cursor-pointer"
            onClick={closeMenu}
          />
        </div>

        <ul className="flex flex-col items-center justify-center h-[80%] gap-8 text-xl font-semibold">
          {NavData.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                end
                className="text-black hover:text-amber-600 transition"
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          <div className="flex flex-col gap-2 mt-6 text-base">
            <NavLink to="/" onClick={closeMenu}>
              تسجيل الدخول
            </NavLink>
            <NavLink to="/" onClick={closeMenu}>
              إنشاء حساب
            </NavLink>
          </div>
        </ul>
      </div>
    </>
  );
}
// joudy