import { useState, useRef, useEffect } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomDropdownProps {
  register?: UseFormRegisterReturn;
  error?: string;
  onChange?: (value: string) => void;
}

export default function CustomDropdown({
  register,
  error,
  onChange,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("ما هي الخدمة التي تحتاجها؟ . *");
  const options = ["استشارة", "كورس ", "ورشة ", "بودكاست ", "غير ذلك "];
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="w-full  relative text-right" dir="rtl">
      {/* العنصر الرئيسي */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" border border-white h-[56px] text-white px-5 py-[15px] flex items-start justify-between cursor-pointer"
      >
        <span className="text-base ">{selected}</span>

        {/* السهم */}
        <svg
          className={`w-4 h-4 mt-[4px] ms-[5px] text-[#3B2241] transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <polygon points="50,70 20,30 80,30" />
        </svg>
      </div>

      {/* القائمة المنسدلة */}
      {isOpen && (
        <ul className=" absolute z-10 mt-[-40px] w-full bg-white border border-[#7a4687] rounded-md shadow-lg text-sm overflow-hidden">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
                onChange?.(option);
              }}
              className="px-4 py-2 hover:bg-purple-200 hover:shadow-sm text-[#3B2241] cursor-pointer transition"
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {/* Hidden input for react-hook-form */}
      <input
        type="hidden"
        value={selected === "ما هي الخدمة التي تحتاجها؟ . *" ? "" : selected}
        {...register}
      />

      {/* Error message */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
