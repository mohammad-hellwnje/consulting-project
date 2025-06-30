

interface Button2Props {
  text: string;
  className?: string; // ← إضافة الكلاس الخارجي كـ prop اختياري
}

export default function Button2({ text, className = "" }: Button2Props) {
  return (
    <button
      className={` w-[111px] h-[40px] rounded-[100px] bg-[#4E2E56] flex items-center justify-center text-white cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}
