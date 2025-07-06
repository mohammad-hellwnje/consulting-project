import PhoneInput from "react-phone-number-input";
import type { Country } from "react-phone-number-input";
import "react-phone-number-input/style.css";

export interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  value?: string;
  onChange: (value: string | undefined) => void;
  defaultCountry?: Country;  // استخدام النوع الصحيح Country
}

export default function Input({
  name,
  type,
  placeholder, 
  required,
  value,
  onChange,
  defaultCountry = "SY" as Country,  // تغيير القيمة الافتراضية إلى SY لسوريا
}: InputProps) {
  if (type === "tel") {
    return (
      <div className="w-[465px] border px-4 py-2 rounded-sm">
        <PhoneInput
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          defaultCountry={defaultCountry}
          international
        />
      </div>
    );
  }

  return (
    <input
      className="w-[465px] border px-4 py-2 rounded-sm"
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
