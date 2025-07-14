import { ButtonProps } from "../../../types/types";

export default function Button({text , className , onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`  flex justify-center items-center text-center leading-[100%] lg:text-xl font-bold h-[42px] p-2 min-w-[158px] rounded-sm   ${className}`}>
      {text}
    </button>
  )
}
