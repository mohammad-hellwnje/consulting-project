import { ExperienceData } from "../../Data/ExperienceData";
import SmallTitle from "../SmallTitle/SmallTitle";
import Exp from "./../../assets/about/experience.png"
import mandella from "./../../assets/about/aboutmandella.png"
import fullmandella from "./../../assets/about/fullmandella.png"
export default function ExperienceSection() {
  return (
    <div className="relative padding-global  pt-[80px] pb-[80px] max-[1441px]:pb-[69px]  max-[1024px]:pt-[60px]">
      <SmallTitle icon={Exp} title="الخبرات " />
      <ul className="w-[90%] max-[1024px]:w-full text-4xl text-white font-normal leading-[156%]   space-y-[13px] list-disc list-inside">
        {ExperienceData.map((item, index) => (
          <li key={index}>{item.Exp}</li>
        ))}
      </ul>
      <img
        src={mandella}
        alt="mandella"
        className="absolute left-0 top-0 max-[748px]:hidden"
      />
      <img
        src={fullmandella}
        alt="mandella"
        className="hidden w-[45.1137%] absolute left-0 top-0 max-[748px]:flex"
      />
    </div>
  );
}
