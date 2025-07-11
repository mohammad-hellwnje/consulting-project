import { NavLink } from "react-router-dom";
export interface AuthBtnProps {
    text: string;
    path: string;
    forceActive?: boolean;
}
export default function AuthBtn({text , path , forceActive = false} : AuthBtnProps) {
  return (
    <NavLink  to={path} className={ ({isActive}) => `text-white h-[42px] p-2 w-[158px] rounded-sm flex justify-center items-center text-center leading-[100%] lg:text-xl font-bold 
     ${(isActive || forceActive) ? 'bg-authbtnActive/25  hover:bg-authbtnActive/30' : ' border hover:bg-white/30 border-white'}` } >
        {text}
    </NavLink>
  )
}
