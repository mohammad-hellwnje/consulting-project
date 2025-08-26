import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";

export interface InputProps {
  placeholder?: string;
  label?: string;
  type?: string;
  name?: string;
  error?: string;
  maxLength?: number;
  showCount?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
  register?: UseFormRegisterReturn; // 👈 هذا بدل any// من react-hook-form
}

export default function Input({
  placeholder = "",
  type = "text",
  name,
  error,
  maxLength,
  showCount = false,
  icon,
  className = "",
  register, // نأخذه هنا
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="mb-4 w-full">
      <div className="relative">
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`
            w-full xl:px-4 xl:py-[23px] lg:p-4 p-3
            border ${error ? "border-red-500" : "border-[#4E2E56]"} 
            rounded-md 
            focus:outline-none focus:ring-1 
            ${error ? "focus:ring-red-500" : "focus:ring-[#4E2E56]"} 
            focus:border-transparent
            bg-white
            placeholder:text-gray-400 placeholder:text-sm
            ${className}
          `}
          {...register} // أهم سطر، هو اللي يربط الحقل بـ react-hook-form
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (maxLength) {
              setCharCount(e.target.value.length);
            }
          }}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 rtl:left-0 ltr:right-0 ltr:pr-3 rtl:pl-3 flex items-center text-[#4E2E56] hover:text-[#603969]"
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        )}

        {icon && !type.includes("password") && (
          <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 pr-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
      </div>

      {showCount && maxLength && (
        <div className="flex justify-end mt-1">
          <span className="text-xs text-gray-500">
            {charCount}/{maxLength}
          </span>
        </div>
      )}

      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
