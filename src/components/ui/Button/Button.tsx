import { ButtonProps } from "../../../types/types";
import { HashLink } from "react-router-hash-link";

export default function Button({text , className , path }: ButtonProps) {
  return (
    <HashLink smooth to={path} className={` btn-primary
    lg:min-w-[154px] xl:text-base lg:text-sm  lg:font-medium    ${className}`}>
      {text}
    </HashLink>
  )
}
