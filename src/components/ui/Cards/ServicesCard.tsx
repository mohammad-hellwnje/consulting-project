import ServBtn from "../Button/ServBtn";
import mandel from '../../../assets/mandella.webp'
interface cardServPropType
{
    flexDer : string; 
    servImage : string ;
    title : string;
    icon : string;
    description :string;
    path : string;

}
export default function ServicesCard({flexDer , servImage ,title , icon ,description , path} : cardServPropType) {
  return (
    <div className={`flex relative rounded-3xl z-50 ${flexDer} overflow-hidden bg-white 2xl:min-h-[524px] w-full`}>
      <div className=" gap-4 p-7 h-full flex flex-col  justify-center w-[45%]">
        <img src={mandel} className=" w-25 absolute top-0 left-0" alt="" />
        <div className=" flex gap-2.5  justify-start items-center">
            <h2 className=" text-[#4E2E56] leading-[100%] text-2xl font-semibold">{title}</h2>
            <img className=" w-10 h-10" src={icon} alt={title} />
        </div>
        <p className=" text-sm font-normal text-gray-600">{description}</p>
        <ServBtn text="المزيد" path={path} /> 
      </div>
      <div className=" w-[55%] h-full bg-black">
        <img src={servImage} className=" w-full h-full" alt="" />
      </div>
    </div>
  )
}
