// Sidebar.jsx
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { NavData } from "../../Data/NavData";

export default function SideBar({ menuOpen, closeMenu }) {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen z-[1001] transition-all duration-300 ease-in-out 
      ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
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
  );
}
