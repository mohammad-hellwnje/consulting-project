import IconDev from "./IconDev";
interface cardOropsType
{
    stepIcon: string;
    title : string;
    description : string;
}
export default function Card({stepIcon , title ,description } : cardOropsType) {
  return (
    <div className="flex flex-col items-center  2xl:w-[300px] text-center  ">
        <IconDev icon={stepIcon}/>
        <h3 className="text-lg font-medium mb-4 mt-4">{title}</h3>
        <p className=" laptop:text-sm text-xs leading-relaxed">{description}</p>
    </div>
  )
}
