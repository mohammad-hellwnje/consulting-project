import { NavLink } from "react-router-dom";
import { AuthBtnProps } from "../../../types/types";
/* 
 login sign up button in home page 
 params => text - inside button 
 path - for navigate 
 forceActive - for defult active button (boolean)
*/
export default function AuthBtn({text , path , forceActive = false} : AuthBtnProps) {
  return (
    <NavLink  to={path} className={ ({isActive}) => `text-white 
     p-2 
    2xl:py-3 2xl:px-8
    xl:min-w-[154px]  laptop:min-w-[130px]
    2xl:min-w-[158px]  
    rounded-sm flex justify-center items-center text-center
     leading-[100%]  laptop:text-base 2xl:text-2xl xl:text-xl lg:text-sm  font-medium
     ${(isActive || forceActive) ? 'bg-authbtnActive/25  hover:bg-authbtnActive ' : ' border hover:bg-white/30 border-white'}` } >
        {text}
    </NavLink>
  )
}
