import { useState } from "react";

export default function ServiceSelect() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-full h-[72px] bg-[#ffffff] rounded-md px-3 py-2 flex items-start justify-between"
      dir="rtl"
    >
      {/* عنصر الاختيار */}
      <select
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
        className="bg-transparent text-[#3B2241] text-sm font-normal outline-none appearance-none w-full cursor-pointer"
      >
        <option className="hover:bg-purple-100 hover:shadow-md transition">
          اختر
        </option>
        <option>استشارة</option>
        <option>دورة تدريبية</option>
        <option>طلب خاص</option>
      </select>

      {/* السهم الناعم المثلث */}
      <div className="absolute right-[50px] top-[19px] -translate-y-1/2 pointer-events-none">
        <svg
          className={`w-4 h-4 text-gray-700 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          fill="currentColor"
        >
          <path d="M31.3 192h257.4c28.4 0 42.8 34.5 22.6 54.6l-128.7 128c-12.5 12.5-32.8 12.5-45.3 0L8.7 246.6C-11.6 226.5 2.8 192 31.3 192z" />
        </svg>
      </div>
    </div>
  );
}
//   هي بجوز ماتلزمني لازم اتذكر احذفا 