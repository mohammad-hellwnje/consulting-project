import CustomDropdown from "../CustomDropdown/CustomDropdown";
import whatsup from "../../assets/logos_whatsapp.png"
import mandellaForm from "../../assets/image/image_10-removebg-preview 4.png";
import InputForm from "../ui/Input/InputForm";
import { useMemo, useState } from "react";
import './ContactForm.css'
import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';
import { countries as allCountries } from "../../Data/countryData.ts";
export default function ContactForm() {
  const [phone, setPhone] = useState('');
  const filteredCountries = useMemo(() => allCountries, [allCountries]);

  console.log('Number of countries:', filteredCountries.length);
  console.log('Filtered countries:', filteredCountries);

  return (
    <div className="2xl:w-[40%] w-1/2 overflow-hidden bg-white/20 rounded-[40px] p-12.5  text-right   relative">
      <h2 className="text-5xl font-bold text-white mb-5">نموذج الاتصال</h2>
      <p className="text-2xl text-white/40  mb-6">
        املأ النموذج أدناه ، وسيعود فريقنا إليك على الفور{" "}
      </p>
      <form className="space-y-4 mt-10  " dir="rtl">
        {/* الاسم الكامل */}
          <InputForm required placeholder="أدخل اسمك الكامل" type="text" />
        {/* البريد الإلكتروني */}
        <InputForm required placeholder="أدخل عنوان بريدك الإلكتروني" type="email" />
        {/* رقم الهاتف */}
        <div className="flex m-0 overflow-hidden items-start gap-2  flex-row-reverse">
          <PhoneInput
            defaultCountry="sy"
            countries={filteredCountries}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            placeholder="أدخل رقم الاتصال الخاص بك"
            inputClassName=" border-white! rounded-0! radius-0!  w-full! bg-transparent! h-full! px-3 py-2 "
          />
          <InputForm required placeholder="أدخل رقم الاتصال الخاص بك" type="tel" />
        </div>
        {/* نوع الخدمة */}
        <div>
          <CustomDropdown />
        </div>
        {/* الرسالة */}
        <div>
          <label className=" mb-1.5 block text-white text-sm">
            كيف يمكننا مساعدتك؟
          </label>
          <textarea
            rows={3}
            className="w-full h-[72px] text-right text-sm border border-white text-white placeholder:text-white  px-5 py-[15px] resize-none focus:outline-none focus:ring-1 focus:ring-[#7a4687] "
            placeholder="أدخل رسالتك هنا"
          ></textarea>
        </div>
        <div className=" mt-5">
          {/* زر الإرسال */}

          <button className="mb-5 w-full text-center bg-[#3D2342] text-white py-[15px] text-base font-bold">ارسال</button>
          {/* زر واتساب */}
          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-row-reverse gap-4 justify-center w-full "
          >
            <img
              src={whatsup}
              alt="WhatsApp"
              className=""
            />
            <p className=" leading-8 text-white text-2xl font-bold">تواصل معنا مباشر</p>
          </a>
        </div>
      </form>
      <img
        src={mandellaForm}
        alt="dicoration"
        className="absolute top-0 left-0"
      />
    </div>
  );
}
  