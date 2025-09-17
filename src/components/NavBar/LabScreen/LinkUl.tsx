import { NavHashLink } from "react-router-hash-link";
import { NavData } from "../../../Data/NavData";
import { FaAngleDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function LinkUl({ closeMenu } : {closeMenu?: () => void;}) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // ننتظر قليلاً حتى يتم render الصفحة بالكامل
      setTimeout(() => {
        const section = document.querySelector(location.hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50); // يمكن زيادة الوقت إذا كانت الصفحة ثقيلة
    }
  }, [location]);
  
  return (
    <ul className="lg:flex-row flex-col gap-2 flex xl:gap-2 items-center">
      {NavData.map((item, index) => {
        // اذا الرابط فيه هاش (#) نقارن مع location.hash
        const isHashLink = item.path.includes("#");
        const isActive = isHashLink
          ? location.hash === item.path.replace("/", "")
          : location.pathname === item.path;

        return (
          <li
            key={index}
            className="flex 2xl:text-2xl xl:text-xl lg:text-sm lg:font-medium items-center gap-1 relative"
          >
            <NavHashLink
              smooth
              to={item.path}
              onClick={closeMenu}
              className={`flex h-[42px] items-center justify-center rounded-sm transition relative ${
                isActive
                  ? "bg-[#F5F5F5] px-3.5 text-[#7E3994]"
                  : "text-white px-3.5 hover:bg-[#F5F5F5] hover:text-[#7E3994]"
              }`}
            >
              {item.name}
              {index === 2 && <FaAngleDown className="mt-1 mx-1" />}

              {item.soon && (
                <span className="absolute -top-1 -left-0 rounded-tl-md rounded-br-md bg-red-500 text-white text-[10px] px-2 py-0.5 font-bold shadow-md">
                  قريباً
                </span>
              )}
            </NavHashLink>
          </li>
        );
      })}
    </ul>
  );
}
