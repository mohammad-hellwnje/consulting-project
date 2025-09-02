import CustomDropdown from "../CustomDropdown/CustomDropdown";
import whatsup from "../../assets/logos_whatsapp.png";
import mandellaForm from "../../assets/image/image_10-removebg-preview 4.png";
import InputForm from "../ui/Input/InputForm";
import { useState } from "react";
import "./ContactForm.css";
import "react-international-phone/style.css";
// import { countries as allCountries } from "../../Data/countryData.ts";
import { useForm } from "react-hook-form";
import { useContact } from "../../hooks/useContact";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
};

export default function ContactForm() {
  // const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  // const filteredCountries = useMemo(() => allCountries, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormValues>();
  const { mutate: contactMutate, isPending } = useContact();

  const onSubmit = (data: ContactFormValues) => {
  // const combinedPhone = `${phone}${data.phone}`.replace(/(?!^\+)[^\d]/g, '');

  const contactData = {
    name: data.name,
    email: data.email,
    subject: data.subject,
    message: data.message,
    phone: data.phone,
  };

  contactMutate(contactData, {
    onSuccess: () => {
      setSuccessMessage("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
      reset();
      // setPhone("");
    },
    onError: (err) => {
      console.error("خطأ في إرسال الرسالة:", err);
    },
  });
};


  return (
    <div className="2xl:w-[40%] lg:w-1/2 w-full overflow-hidden bg-white/20 rounded-[40px] md:p-12.5 py-10 px-4 text-right   relative">
      <h2 className="text-5xl font-bold text-white mb-5">نموذج الاتصال</h2>
      <p className="text-2xl text-white/40  mb-6">
        املأ النموذج أدناه ، وسيعود فريقنا إليك على الفور{" "}
      </p>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-500/20 border border-green-500 text-green-100 p-4 rounded-md mb-4">
          {successMessage}
        </div>
      )}

      <form
        className="space-y-4 mt-10"
        dir="rtl"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* الاسم الكامل */}
        <div>
          <InputForm
            required
            placeholder="أدخل اسمك الكامل"
            type="text"
            register={register("name", { required: "الاسم الكامل مطلوب" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* البريد الإلكتروني */}
        <div>
          <InputForm
            required
            placeholder="أدخل عنوان بريدك الإلكتروني"
            type="email"
            register={register("email", {
              required: "البريد الإلكتروني مطلوب",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "البريد الإلكتروني غير صحيح",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        {/* رقم الهاتف */}
        <div className="flex m-0 overflow-hidden items-start gap-2  flex-row-reverse">
          {/* <PhoneInput
            defaultCountry="sy"
            countries={filteredCountries}
            value={phone}
            onChange={(phone) => {
              setPhone(phone);
              setValue("phone", phone);
            }}
            placeholder="أدخل رقم الاتصال الخاص بك"
            inputClassName=" border-white! rounded-0! radius-0!  w-full! bg-transparent! h-full! px-3 py-2 "
          /> */}
          <InputForm
            required
            placeholder="أدخل رقم الاتصال الخاص بك"
            type="tel"
            register={register("phone", { required: "رقم الهاتف مطلوب" })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        {/* نوع الخدمة */}
        <div>
          <CustomDropdown
            register={register("subject", { required: "نوع الخدمة مطلوب" })}
            error={errors.subject?.message}
            onChange={(value) => setValue("subject", value)}
          />
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
            {...register("message", { required: "الرسالة مطلوبة" })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className=" mt-5">
          {/* زر الإرسال */}

          <button
            type="submit"
            disabled={isPending}
            className="mb-5 w-full text-center bg-[#3D2342] text-white py-[15px] cursor-pointer text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed outline-0"
          >
            {isPending ? "جاري الإرسال..." : "ارسال"}
          </button>
          {/* زر واتساب */}
          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-row-reverse gap-4 justify-center w-full "
          >
            <img src={whatsup} alt="WhatsApp" className="" />
            <p className=" leading-8 text-white text-2xl font-bold">
              تواصل معنا مباشر
            </p>
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
