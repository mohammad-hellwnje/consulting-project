import { ButtonProps } from "../../../types/types";

export default function HeroButton({text , onClick , icon}: ButtonProps) {
  return (
    <button onClick={onClick} className={`bg-white/14 2xl:gap-6 gap-4 flex text-white rounded-[30px] justify-center items-center text-center leading-[100%] 2xl:text-xl text-base font-bold h-[48px] px-3 py-2 min-w-[147px] `}>
     {text}   <img src={icon} className=" w-[25px] h-[28px]" alt={text}/>
    </button>
  )
}
