import { Link } from "react-router-dom";
import logo from "../../../assets/LOGO (1).webp";

export default function Logo() {
  return (
    <Link to="/">
        <img src={logo} alt="logo" className="2xl:h-[75px]  laptop:h-[56px] h-[45px] lg:w-[132px] 2xl:w-[177px]" />
    </Link>
  )
}
