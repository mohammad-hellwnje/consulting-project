
type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-white border border-[#4E2E56] text-[#4E2E56] rounded-3xl text-lg text-center leading-relaxed w-[121px] h-[43px]">
      {text}
    </button>
  );
}
