import { HomeAboutProps } from "./../../types/HomeAbout";
import aboutdecor from './../../assets/image/AboutDecor.png'
import Banner from "../Banner/Banner";
function HomeAbout({ imageUrl, heading, tabs, titleImage }: HomeAboutProps) {
  return (
    <section className="About bg-[#3B2241] border-b-[4px] border-[#CB88BB40] relative">
      <div className="absolute top-[43px] right-0 w-[203px] h-[183px] bg-[#CB88BB]/[0.13] filter blur-[100px] " />

      <div className="relative flex  justify-center flex-row-reverse ">
        <h2 className="text-white text-[36px] mt-[32px] font-normal leading-[43.2px] ">
          {heading}
        </h2>
        <img src={titleImage} alt="titleimage" className="w-[350.8px] h-[149px] relative top-[-40px] left-[72px] opacity-[0.88] " />
      </div>

      <div className="pl-[109px] pr-[102px] flex justify-between">

          <img src={aboutdecor} alt="decor" className="w-[566px] h-[608px] mb-[60px]" />
          <img
            src={imageUrl}
            alt="image"
            className="absolute h-[609px] w-[319px] left-[233px] bottom-0"/>

        <div className="flex mt-[30px]">

          <div className="flex  gap-[20px] mr-[35px]">
            <img src={tabs[1].iconUrl} alt="icon" className="w-[49.56px] h-[49.56px]" />
            <span className="text-4xl text-white font-normal">{tabs[1].label}</span>
          </div>

          <div
            className="w-[10px] h-[460px] rounded-full mt-[52px] bg-gradient-to-b from-[rgba(203,213,225,0.23)] to-[#AF6EBF]"
          ></div>

          <div className="flex  gap-[20px] ml-[21px]">
            <img src={tabs[0].iconUrl} alt="icon" className="w-[63.79px] h-[63.79px]" />
            <span className="text-4xl text-white font-normal">{tabs[0].label}</span>
          </div>
        </div>
      </div>
      <div className=" absolute top-[726px] left-[325px]">
        <Banner message="ابدأ رحلتك التربوية مع أكاديميتنا"
          buttonPrimaryText=" ابدأ رحلتك معي الآن"
          buttonSecondaryText=" اكتشف خدماتنا" />
      </div>
    </section>

  );
}

export default HomeAbout;
