import { NavLink } from "react-router-dom";
import { NavData } from "../../../Data/NavData";
import { FaAngleDown } from "react-icons/fa";

export default function LinkUl() {
  return (
    <ul className="lg:flex-row flex-col gap-2 flex xl:gap-2  items-center ">
        {NavData.map((item, index) => (
        <li key={index} className="flex 2xl:text-2xl xl:text-xl lg:text-sm lg:font-medium items-center gap-1">
            <NavLink  to={item.path} end className={({ isActive }) => `flex h-[42px] items-center justify-center rounded-sm transition ${
                isActive
                ? "bg-[#F5F5F5] 2xl:min-w-[147px] xl:min-w-[158px] lg:w-[80px] md:w-[158px] text-[#7E3994]  "
                : "text-white xl:min-w-[120px] 2xl:min-w-[147px] xl:hover:w-[114px] lg:w-[80px]  md:w-[158px] lg:hover:w-[80px] transition-all duration-200  hover:bg-[#F5F5F5] hover:text-[#7E3994] "}`}>
                    {item.name}
                {index === 2 && <FaAngleDown className="mt-1 mx-1" />}
            </NavLink>
        </li>))}
    </ul>
  )
}
