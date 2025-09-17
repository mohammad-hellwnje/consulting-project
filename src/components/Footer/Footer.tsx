import { Link } from "react-router-dom";
import FooterSideName from "../ui/FooterSideName/FooterSideName";
import { footerData } from "../../Data/footer";

export default function Footer() {
  return (
    <footer className="py-12.5 2xl:gap-[11.406%] md:flex-row flex-col gap-10 text-white items-center bg-[#3B2241] flex w-full  padding-global">
      <div className=" flex sm:flex-row flex-col items-center sm:items-start text-center sm:text-start justify-between  w-10/12 gap-5 ">
        {footerData.map((link, i) => (
          <div className=" flex flex-col " key={i}>
            <h2 className=" text-[32px] mb-7 font-bold">{link.h2}</h2>
            {link.link.map((links, index) =>
              links.href ? (
                <Link key={index} className="mb-5.5 text-base" to={links.href}>
                  {links.label}
                </Link>
              ) : (
                <p className=" mb-5.5 text-base">{links.label}</p>
              )
            )}
          </div>
        ))}
      </div>
      <FooterSideName />
    </footer>
  );
}
