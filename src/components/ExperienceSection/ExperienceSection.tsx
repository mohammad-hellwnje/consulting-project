import { ExperienceData } from "../../Data/ExperienceData";
import SmallTitle from "../SmallTitle/SmallTitle";
import Exp from "./../../assets/about/experience.png"
export default function ExperienceSection() {
  return (
    <div className="padding-global  pt-[80px] pb-[80px] max-[1441px]:pb-[69px]  max-[1024px]:pt-[60px]">
      <SmallTitle icon={Exp} title="الخبرات " />
      <ul className="text-4xl text-white font-normal leading-[156%] pl-5 space-y-[13px] list-disc list-inside">
        {ExperienceData.map((item, index) => (
          <li key={index}>{item.Exp}</li>
        ))}
      </ul>
    </div>
  );
}
//need to edit 
