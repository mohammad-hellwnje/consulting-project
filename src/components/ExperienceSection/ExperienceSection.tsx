import { ExperienceData } from "../../Data/ExperienceData";
import SmallTitle from "../SmallTitle/SmallTitle";
import Exp from "./../../assets/about/experience.png"
import mandella from "./../../assets/about/aboutmandella.png"
import fullmandella from "./../../assets/about/fullmandella.png"
export default function ExperienceSection() {
  return (
    <div className="relative bg-[#3B2241] py-[50px] padding-global   ">
      <SmallTitle icon={Exp} title="الخبرات " />
      <ul className="w-[90%] max-[1024px]:w-full  2xl:text-[35px] xl:text-3xl laptop:text-2xl lg:text-xl 2xl:leading-15 text-white font-normal leading-[156%]   space-y-[13px] list-disc list-inside">
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
