import { useState, useRef, useEffect } from "react";

export default function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("اختر");
  const options = ["استشارة", "كورس ", "ورشة ", "بودكاست ", "غير ذلك "];
  const dropdownRef = useRef(null);

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
        className="bg-white h-[72px]  rounded-md px-3 py-2 flex items-start  cursor-pointer"
      >
        <span className="text-sm text-[#19213D99]">{selected}</span>

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
              }}
              className="px-4 py-2 hover:bg-purple-200 hover:shadow-sm text-[#3B2241] cursor-pointer transition"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
