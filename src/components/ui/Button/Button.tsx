import { NavLink } from "react-router-dom";
import { ButtonProps } from "../../../types/types";

export default function Button({text , className , path }: ButtonProps) {
  return (
    <NavLink to={path} className={` btn-primary
    lg:min-w-[154px] xl:text-base lg:text-sm  lg:font-medium    ${className}`}>
      {text}
    </NavLink>
  )
}
