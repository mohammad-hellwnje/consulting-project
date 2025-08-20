import { NavLink } from "react-router-dom";
import { ButtonProps } from "../../../types/types";

export default function HeroButton({text , path , icon}: ButtonProps) {
  return (
    <NavLink to={path}  className={
    `bg-white/14 2xl:gap-6 gap-4 flex justify-center items-center text-center text-white
     md:rounded-[30px] rounded-full  md:leading-[100%] 
     xl:text-xl lg:text-sm text-sm 
     lg:font-normal 2xl:font-medium 
    2xl:h-[70px] md:h-[48px] px-3 py-2 
    lg:min-w-[140px]  w-max  2xl:min-w-[200px] `}>
     {text}   <img src={icon} className=" lg:w-[25px] w-4 h-4 lg:h-[28px]" alt={text}/>
    </NavLink>
  )
}
