import ContactForm from "../ContactForm/ContactForm";
import backvideo from "../../img/contact/video_2025-06-22_21-46-12.mp4"

export default function ContactSection() {
  return (
    <div id="contact" className="relative padding-global py-[50px] w-full overflow-hidden scroll-mt-[50px]">
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
      {/* المحتوى فوق الفيديو */}
      <div className="relative gap-11.5 w-full z-20 flex lg:flex-row flex-col  items-center  h-full  ">
          <ContactForm />
        <p className=" 2xl:text-[40px] text-white 2xl:w-[52.08%] text-2xl lg:w-1/2 w-full leading-[1.4] text-right">
          نحن هنا لمساعدتك في تحقيق أهداف عملك. سواء كان لديك أسئلة حول خدماتنا
          ، أو ترغب في استكشاف فرص التعاون ، أو تحتاج إلى إرشادات ، نود أن نسمع
          منك!
        </p>
      </div>
    </div>
  );
}
