import React from "react";
import { HomeHeroProps } from "../../types/HomeHero";

const HomeHero: React.FC<HomeHeroProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  Buttons = [],
}) => {
  return (
    <section
      className="hero w-dvh overflow-hidden bg-hero bg-center  bg-no-repeat  flex justify-end  relative "
    > 
      <div className="absolute top-0 right-0 w-[186px] h-[150px] bg-[#CB88BB]/[0.13] filter blur-[100px] " />
      <div className="absolute bottom-0 left-0 w-[186px] h-[150px] bg-[#CB88BB]/[0.13] filter blur-[100px] " />

      {/* Left Content */}
      <div className="w-[953px] text-right pt-[165px] relative z-10">
        <h1 className="text-[32px] font-normal text-white leading-[165%] mb-[21px]">
          {title}
        </h1>
        <div>
          <p className="text-xl font-normal leading-[120%] text-white mb-[21px]">
            {description}
          </p>
          <div className="flex justify-end gap-[32px]">
            <button className="w-[158px] h-[42px] border bg-white text-base font-normal text-textbtnColor rounded-sm">
              {secondaryButton}
            </button>
            <button className="w-[158px] h-[42px] bg-btnColor text-base font-normal text-white rounded-sm">
              {primaryButton}
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <img
        src={imageSrc}
        alt="HeroImage"
        className="w-[449.14px] h-[662px] object-cover rounded-[20px] relative z-10"
      />

      <div className="absolute bottom-[71px] left-[112px] flex gap-[32px] z-10">
        {Buttons.map((btn, index) => (
          <button
            key={index}
            className="flex items-center justify-center gap-[25px] text-base font-medium bg-btnColor text-white rounded-[30px] w-[147px] h-[48px]"
          >
            <img src={btn.iconSrc} alt="btnicon" className="w-5 h-5" />
            {btn.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
