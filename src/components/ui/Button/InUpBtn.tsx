import { NavLink } from "react-router-dom";
interface InUpBtnProp
{
    path : string;
    text : string;
}
export default function InUpBtn({path , text} : InUpBtnProp) {
  return (
    <NavLink to={path} className={ ({isActive}) => ` z-30 xl:py-10 xl:px-12 lg:p-7 p-5 rounded-r-full text-base lg:text-lg xl:text-2xl
     ${ (isActive) ? `bg-[#CB88BB40]/25 text-white` : ` text-white`}`}>
      {text}
    </NavLink>
  )
}
