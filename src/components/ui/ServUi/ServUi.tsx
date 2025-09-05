import mandela from "../../../assets/authImage/main.svg";
import frame from "../../../assets/Frame.webp";
import frame2 from "../../../assets/Fram2.webp";
import line from "../../../assets/line-7.webp";
import vector from "../../../assets/home.webp";
import { NavLink } from "react-router-dom";
import ServBtnIcon from "../Button/ServBtnIcon";
interface ServicesPagesProps {
  image: string;
  title: string;
  paragraph : string;
  btn : string;
}
export default function ServUi({ image, title , paragraph , btn}: ServicesPagesProps) {
  return (
    <section className="flex flex-col md:flex-row justify-between bg-[#3B2241] h-screen w-full">
      <div className="h-1/3 md:h-screen md:w-[45%]">
        <img className=" w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="px-10 flex relative md:items-center md:w-[55%] h-full overflow-hidden ">
        <NavLink to={"/"} className=" absolute top-4.5 w-5  z-40">
          <img src={vector} alt="" />
        </NavLink>
        <img src={mandela} className=" -top-16 -left-16 absolute w-48" alt="" />
        <img src={frame} alt="" className=" absolute left-0 bottom-0" />
        <img src={frame2} alt="" className=" absolute right-0 top-0" />
        <div className="mt-15">
          <h1 className=" text-white text-2xl mb-2 w-9/10 text-balance">{title}</h1>
          <img src={line} alt="line" />
          <p className=" text-white mt-10 w-10/12">
            {paragraph}
          </p>
          <ServBtnIcon text={btn}/>
        </div>
      </div>
    </section>
  );
}
