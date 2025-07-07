import { Link } from "react-router-dom";
import logo from "../../../img/general/LOGO (1).png";

export default function Logo() {
  return (
    <Link to="/">
        <img src={logo} alt="logo" className="lg:h-[75px] lg:w-[177px]" />
    </Link>
  )
}
