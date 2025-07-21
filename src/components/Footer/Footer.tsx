import { Link } from "react-router-dom";
import FooterSideName from "../ui/FooterSideName/FooterSideName";
import { footerData } from "../../Data/footer";

export default function Footer() {
  return (
    <footer className="py-12.5 text-white items-center bg-[#3B2241] flex w-full justify-between  px-[115px]">
      <div className=" flex w-10/12 gap-56 ">
        {footerData.map((link , i) => (
          <div className=" flex flex-col " key={i}>
             <h2 className=" text-[32px] mb-7 font-bold">{link.h2}</h2>
             {link.link.map((links , index) => 
             ( <Link key={index} className=" mb-5.5 text-base"  to={links.href}> {links.label} </Link>))}
          </div>
        ))}
      </div>
      <FooterSideName/>
    </footer>
  )
}
