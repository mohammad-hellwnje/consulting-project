import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

interface PhoneDropdownProps {
  value: string;
  onChange: (country: Country) => void;
  className?: string;
}

const arabCountries: Country[] = [
  { name: 'السعودية', code: 'SA', dialCode: '+966', flag: '🇸🇦' },
  { name: 'الإمارات', code: 'AE', dialCode: '+971', flag: '🇦🇪' },
  { name: 'مصر', code: 'EG', dialCode: '+20', flag: '🇪🇬' },
  { name: 'الأردن', code: 'JO', dialCode: '+962', flag: '🇯🇴' },
  { name: 'العراق', code: 'IQ', dialCode: '+964', flag: '🇮🇶' },
  { name: 'سوريا', code: 'SY', dialCode: '+963', flag: '🇸🇾' },
  { name: 'الكويت', code: 'KW', dialCode: '+965', flag: '🇰🇼' },
  { name: 'قطر', code: 'QA', dialCode: '+974', flag: '🇶🇦' },
  { name: 'البحرين', code: 'BH', dialCode: '+973', flag: '🇧🇭' },
  { name: 'لبنان', code: 'LB', dialCode: '+961', flag: '🇱🇧' },
  { name: 'عُمان', code: 'OM', dialCode: '+968', flag: '🇴🇲' },
  { name: 'المغرب', code: 'MA', dialCode: '+212', flag: '🇲🇦' },
  { name: 'الجزائر', code: 'DZ', dialCode: '+213', flag: '🇩🇿' },
  { name: 'تونس', code: 'TN', dialCode: '+216', flag: '🇹🇳' },
  { name: 'ليبيا', code: 'LY', dialCode: '+218', flag: '🇱🇾' },
  { name: 'السودان', code: 'SD', dialCode: '+249', flag: '🇸🇩' },
  { name: 'اليمن', code: 'YE', dialCode: '+967', flag: '🇾🇪' },
  { name: 'فلسطين', code: 'PS', dialCode: '+970', flag: '🇵🇸' },
];

export default function PhoneDropdown({ value, onChange, className = '' }: PhoneDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(arabCountries[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Set default country based on value
    if (value) {
      const country = arabCountries.find(c => value.startsWith(c.dialCode));
      if (country) {
        setSelectedCountry(country);
      }
    }
  }, [value]);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    onChange(country);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 bg-transparent border border-white text-white rounded-none focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-white/10 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{selectedCountry.flag}</span>
          <span className="text-sm font-medium">{selectedCountry.dialCode}</span>
          <span className="hidden sm:inline text-sm text-white/80">{selectedCountry.name}</span>
        </div>
        <ChevronDownIcon 
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-2xl max-h-60 overflow-y-auto">
          {arabCountries.map((country) => (
            <button
              key={country.code}
              type="button"
              onClick={() => handleCountrySelect(country)}
              className={`w-full px-4 py-3 text-right flex items-center gap-3 hover:bg-purple-50 transition-colors duration-150 ${
                selectedCountry.code === country.code ? 'bg-purple-100 text-purple-700' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{country.flag}</span>
              <div className="flex-1 text-right">
                <div className="font-medium text-sm">{country.name}</div>
                <div className="text-xs text-gray-500">{country.dialCode}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
