import { useState } from 'react';
import PhoneDropdown from '../PhoneDropdown/PhoneDropdown';

interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

interface CustomPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export default function CustomPhoneInput({ 
  value, 
  onChange, 
  placeholder = "أدخل رقم الهاتف", 
  className = "",
  required = false 
}: CustomPhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: 'سوريا',
    code: 'SY',
    dialCode: '+963',
    flag: '🇸🇾'
  });

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
    // Update the phone number with new country code
    const phoneNumber = value.replace(/^\+\d+/, '');
    onChange(country.dialCode + phoneNumber);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value;
    // Remove any non-digit characters except spaces and dashes
    const cleanNumber = phoneNumber.replace(/[^\d\s-]/g, '');
    onChange(selectedCountry.dialCode + cleanNumber);
  };

  // Extract phone number without country code for display
  const displayNumber = value.replace(selectedCountry.dialCode, '');

  return (
    <div className={`flex gap-0 ${className}`}>
      {/* Country Code Dropdown */}
      <div className="w-32 sm:w-40 flex-shrink-0">
        <PhoneDropdown
          value={value}
          onChange={handleCountryChange}
          className="h-full"
        />
      </div>
      
      {/* Phone Number Input */}
      <div className="flex-1">
        <input
          type="tel"
          value={displayNumber}
          onChange={handlePhoneChange}
          placeholder={placeholder}
          required={required}
          className="w-full h-full px-4 py-3 bg-transparent border border-white border-r-0 text-white placeholder:text-white/60 text-right focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
          dir="ltr"
        />
      </div>
    </div>
  );
}
