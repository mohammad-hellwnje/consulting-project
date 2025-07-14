import { ServiceData } from "../../Data/ServiceData";
import background from "../../img/service/background.png";
import mandellaTop from "../../img/service/mandellaTop.png";
import mandellaBottom from "../../img/service/mandellaBottom.png";
import ServicesCard from "../ServicesCard/ServicesCard";
import SectionTitle from "../ui/Titles/SectionTitle";

export default function ServicesSection() {
  return (
    <div className="bg-[#3B2241] relative h-[1900px] px-[115px] py-[100px]  w-full overflow-x-hidden">
      <SectionTitle text="خدماتنا" className=" mb-[100px] text-white"/>
      <div className=" w-[62px] h-[1244px]  rounded-t-[8px]  border-t-2 border-r-2 border-l-0 border-b-0 border-white relative top-[485px] right-[-48.5%] ">
        <div className="w-[40px] h-0.5 bg-white  absolute right-[-40px] top-[262px]"></div>
        <div className="w-0 h-0 border-t-[9.375px] border-b-[9.375px] border-l-[15px] border-t-transparent border-b-transparent border-white absolute right-[-48px] top-[254px]"></div>
        <div className="w-[40px] h-[10px] rounded-tr-[300px] border-t-2 border-r-2 border-white absolute right-[-2px] top-[768px]"></div>
        <div className="w-0 h-0 border-t-[9.375px] border-b-[9.375px] border-r-[15px] border-t-transparent border-b-transparent border-white absolute right-[30px] top-[760px]"></div>
        <div className="w-[40px] h-[10px] rounded-bl-[300px] border-l-2 border-b-2 border-white absolute left-[60px] top-[968px]"></div>
        <div className="w-0 h-0 border-t-[9.375px] border-b-[9.375px] border-l-[15px] border-t-transparent border-b-transparent border-white absolute right-[-48px] top-[968px]"></div>
      </div>
      <div className="absolute top-[240px] left-[5.9895833333%] w-[43.072916667%]">
        <ServicesCard type="1" data={ServiceData[0]} larger={true} />
      </div>
      <div className="absolute w-[40.364583333%]  top-[466px] right-[5.5729166667%]">
        <ServicesCard type="2" data={ServiceData[1]} larger={false} />
      </div>
      <div className="absolute top-[919px] left-[5.9895833333%] w-[43.072916667%]">
        <ServicesCard type="2" data={ServiceData[2]} larger={true} />
      </div>
      <div className="absolute w-[40.364583333%] top-[1295px] right-[5.5729166667%]">
        <ServicesCard type="1" data={ServiceData[3]} larger={false} />
      </div>
      <img
        src={background}
        alt=""
        className="w-[316px] absolute top-[324px] left-[879px]   "
      />
      <img
        src={background}
        alt=""
        className="w-[316px] absolute top-[692px] left-[0px]   "
      />
      <img
        src={background}
        alt=""
        className="w-[316px] absolute top-[1330px] left-[807px]   "
      />
      <img
        src={mandellaTop}
        alt=""
        className=" absolute top-[0px] right-[0px]   "
      />
      <img
        src={mandellaBottom}
        alt=""
        className=" absolute bottom-[0px] left-[0px]   "
      />
    </div>
  );
}
