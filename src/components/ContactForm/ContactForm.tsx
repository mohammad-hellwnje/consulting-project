import Button2 from "../Button2/Button2";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import whatsup from "../../img/contact/logos_whatsapp.png"
import mandellaForm from "../../img/contact/mandellaForm.png";

export default function ContactForm() {
  return (
    <div className="w-[30.913348946%] overflow-hidden bg-[#FFFFFFCC] rounded-[40px] p-14 text-right h-[713px]  relative">
      <h2 className="text-xl font-bold text-[#4E2E56] mb-1">نموذج الاتصال</h2>
      <p className="text-sm text-[#4E2E56] mb-6">
        املأ النموذج أدناه ، وسيعود فريقنا إليك على الفور{" "}
      </p>

      <form className="space-y-4   " dir="rtl">
        {/* الاسم الكامل */}
        <div>
          <label className=" text-[#4E2E56] text-sm font-medium mb-1.5">
            * الاسم الكامل
          </label>
          <input
            type="text"
            className="  w-full rounded-md  px-1 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-[#7a4687] text-right placeholder:text-[#19213D99]"
            placeholder="أدخل اسمك الكامل"
          />
        </div>
        {/* البريد الإلكتروني */}
        <div>
          <label className=" text-[#4E2E56] text-sm font-medium mb-1">
            * البريد الإلكتروني للأعمال
          </label>
          <input
            type="email"
            className="w-full rounded-md  px-1 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-[#7a4687] text-right placeholder:text-[#19213D99]"
            placeholder="أدخل عنوان بريدك الإلكتروني"
          />
        </div>
        {/* رقم الهاتف */}
        <label className="block text-[#4E2E56] text-sm font-medium mb-1">
          هاتف{" "}
        </label>
        <div className="flex items-center gap-2 flex-row-reverse">
          <div className="bg-gray-100 text-sm px-3 py-2 rounded-md border border-gray-300">
            +963
          </div>
          <input
            type="tel"
            className="w-full rounded-md  px-1 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-[#7a4687] placeholder:text-[#19213D99]"
            placeholder="أدخل رقم الاتصال الخاص بك"
          />
        </div>
        {/* نوع الخدمة */}
        <div>
          <label className="block text-[#3B2241] text-sm font-medium mb-1.5">
            * ما هي الخدمة التي تحتاجها؟
          </label>
          <CustomDropdown />
        </div>
        {/* الرسالة */}
        <div>
          <label className="block text-[#4E2E56] text-sm font-medium mb-1">
            كيف يمكننا مساعدتك؟
          </label>
          <textarea
            rows={3}
            className="w-full h-[72px] text-right bg-white rounded-md  px-1 resize-none focus:outline-none focus:ring-1 focus:ring-[#7a4687] placeholder:text-[#19213D99]"
            placeholder="أدخل رسالتك هنا"
          ></textarea>
        </div>
        <div className="flex justify-between">
          {/* زر الإرسال */}

          <Button2 text="ارسال" className=" mt-2" />

          {/* زر واتساب */}
          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 ps-[13.76px] pe-[14.76px] py-[5px] bg-white rounded-[100px] shadow-md  w-fit mt-[13px] "
          >
            <img
              src={whatsup}
              alt="WhatsApp"
              className="w-[120.47px] h-[28px] "
            />
          </a>
        </div>
      </form>
      <img
        src={mandellaForm}
        alt="dicoration"
        className="absolute top-0 right-0"
      />
    </div>
  );
}
  