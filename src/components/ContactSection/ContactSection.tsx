import ContactForm from "../ContactForm/ContactForm";
import dicore from "../../img/contact/Ellipse.png"
import backvideo from "../../img/contact/video_2025-06-22_21-46-12.mp4"

export default function ContactSection() {
  return (
    <div className="relative w-full h-[799px] overflow-hidden">
      {/* الفيديو */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={backvideo} type="video/mp4" />
        متصفحك لا يدعم الفيديو.
      </video>

      {/* طبقة الشفافية البنفسجية */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#4d2e56]/70 z-10"></div>
      <img src={dicore} alt="" className="absolute bottom-0 z-11 w-full left-0" />
      {/* المحتوى فوق الفيديو */}
      <div className="relative w-full z-20 flex justify-between items-center  h-full ps-[91px] pe-[121px] ">
        <p className="w-[62.0295081967%] text-[40px]  text-white  leading-[1.4] text-right">
          نحن هنا لمساعدتك في تحقيق أهداف عملك. سواء كان لديك أسئلة حول خدماتنا
          ، أو ترغب في استكشاف فرص التعاون ، أو تحتاج إلى إرشادات ، نود أن نسمع
          منك!
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
