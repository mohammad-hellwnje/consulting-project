import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { NavData } from "../../Data/NavData";

export default function SideBar({ menuOpen, closeMenu } : {menuOpen: boolean; closeMenu: () => void;}) {
  return (
    <div
      className={` fixed top-0 left-0 h-screen w-screen z-[1001] transition-all duration-300 ease-in-out 
      ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      backdrop-blur-md bg-white/30`}
    >
      {/* زر الإغلاق */}
      <div className="flex justify-end p-4">
        <FaTimes
          className="text-3xl text-black cursor-pointer"
          onClick={closeMenu}
        />
      </div>

      {/* القائمة كاملة */}
      <ul className="flex flex-col items-center justify-center h-[85%] gap-4 text-2xl font-medium px-6">
        {[
          ...NavData,
          { path: "/", name: "تسجيل الدخول" },
          { path: "/", name: "إنشاء حساب" },
        ].map((item, index) => (
          <li key={index} className="w-full">
            <NavLink
              to={item.path}
              end
              className={({ isActive }) =>
                `block w-full text-center py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-[#3B2241] text-white shadow-md"
                    : "text-black hover:bg-purple-100 hover:text-[#3B2241]"
                }`
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
