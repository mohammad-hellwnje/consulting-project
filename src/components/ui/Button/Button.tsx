import { ButtonProps } from "../../../types/types";

export default function Button({text , className , onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`  flex justify-center items-center text-center leading-[100%] 2xl:text-xl text-lg 2xl:font-bold font-semibold h-[42px] p-2 min-w-[158px] rounded-sm   ${className}`}>
      {text}
    </button>
  )
}
