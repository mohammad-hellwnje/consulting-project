import { NavLink } from "react-router-dom";
interface ServBtnPropsType
{
    text : string;
    path : string;
}
export default function ServBtn({text , path} : ServBtnPropsType) {
  return (
    <NavLink to={path} className=' w-max border border-[#4E2E56]  rounded-3xl text-lg text-[#4E2E56] py-2 px-6'>
      {text}
    </NavLink>
  )
}
