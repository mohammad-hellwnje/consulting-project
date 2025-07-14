import { ButtonProps } from "../../../types/types";

export default function HeroButton({text , onClick , icon}: ButtonProps) {
  return (
    <button onClick={onClick} className={`bg-white/14 gap-6 flex text-white rounded-[30px] justify-center items-center text-center leading-[100%] lg:text-xl font-bold h-[48px] px-3 py-2 min-w-[147px] `}>
     {text}   <img src={icon} className=" w-[25px] h-[28px]" alt={text}/>
    </button>
  )
}
