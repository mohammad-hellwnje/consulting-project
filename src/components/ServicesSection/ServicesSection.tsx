import { ServiceData } from "../../Data/ServiceData";
import background from "../../img/service/background.webp";
import mandellaTop from "../../img/service/mandellaTop.webp";
import mandellaBottom from "../../img/service/mandellaBottom.webp";
import SectionTitle from "../ui/Titles/SectionTitle";
import ServicesCard from "../ui/Cards/ServicesCard";
export default function ServicesSection() {
  return (
    <section id="services" className=" py-12.5 relative  padding-global w-full">
      <SectionTitle text="خدماتنا" className=" mb-[56px] text-white"/>
      <div className=" flex lg:flex-row-reverse flex-col gap-[5%] justify-between  w-full">
          <div className="2xl:w-[50%] lg:gap-55 gap-10 items-start justify-start flex flex-col ">
            <ServicesCard path="/services" description={ServiceData[0].desc} title={ServiceData[0].title} icon={ServiceData[0].icon} servImage={ServiceData[0].image} flexDer=" md:flex-row-reverse "/>
            <ServicesCard path="/services" description={ServiceData[2].desc} title={ServiceData[2].title} icon={ServiceData[2].icon} servImage={ServiceData[2].image} flexDer="md:flex-row-reverse"/>
          </div>
          <div className="2xl:w-[50%] lg:mt-56 mt-10 lg:gap-55 gap-10 items-start justify-start flex flex-col ">
             <ServicesCard path="/services" description={ServiceData[1].desc} title={ServiceData[1].title} icon={ServiceData[1].icon} servImage={ServiceData[1].image} flexDer="md:flex-row-reverse "/>
             <ServicesCard path="/services" description={ServiceData[3].desc} title={ServiceData[3].title} icon={ServiceData[3].icon} servImage={ServiceData[3].image} flexDer=" md:flex-row-reverse "/>
          </div>
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
    </section>
  );
}
