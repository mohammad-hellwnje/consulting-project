import { NavHashLink } from "react-router-hash-link";
import { NavData } from "../../../Data/NavData";
import { FaAngleDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function LinkUl() {
  const location = useLocation();

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
            className="flex 2xl:text-2xl xl:text-xl lg:text-sm lg:font-medium items-center gap-1"
          >
            <NavHashLink
              smooth
              to={item.path}
              className={`flex h-[42px] items-center justify-center rounded-sm transition ${
                isActive
                  ? "bg-[#F5F5F5] px-3.5 text-[#7E3994]"
                  : "text-white px-3.5 hover:bg-[#F5F5F5] hover:text-[#7E3994]"
              }`}
            >
              {item.name}
              {index === 2 && <FaAngleDown className="mt-1 mx-1" />}
            </NavHashLink>
          </li>
        );
      })}
    </ul>
  );
}
