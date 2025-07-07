import { NavLink } from "react-router-dom";
import { NavData } from "../../../Data/NavData";
import { FaAngleDown } from "react-icons/fa";

export default function LinkUl() {
  return (
    <ul className="hidden lg:flex gap-4.5    items-center ">
        {NavData.map((item, index) => (
        <li key={index} className="flex lg:text-xl lg:font-semibold items-center gap-1">
            <NavLink to={item.path} end className={({ isActive }) => `flex h-[42px] items-center justify-center rounded-sm transition ${
                isActive
                ? "bg-[#F5F5F5] lg:w-[158px] text-[#7E3994]  "
                : "text-white lg:w-[120px] hover:bg-[#F5F5F5] hover:text-[#7E3994] "}`}>
                    {item.name}
                {index === 2 && <FaAngleDown className="mt-1 mx-1" />}
            </NavLink>
        </li>))}
    </ul>
  )
}
