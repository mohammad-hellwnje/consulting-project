import ServBtn from "../Button/ServBtn";
import mandel from '../../../assets/mandella.webp'
interface cardServPropType
{
    flexDer : string; 
    servImage : string ;
    title : string;
    icon : string;
    description :string;
    path : string;

}
export default function ServicesCard({flexDer , servImage ,title , icon ,description , path} : cardServPropType) {
  return (
    <div className={`
      services-card
      flex relative rounded-3xl z-50 overflow-hidden bg-white w-full
      md:flex-row flex-col-reverse ${flexDer}
      2xl:min-h-[524px] md:min-h-[400px] min-h-[380px]
      shadow-lg hover:shadow-xl transition-all duration-300
    `}>
      {/* قسم المحتوى */}
      <div className="gap-4 p-6 md:p-7 flex flex-col justify-center w-full md:w-[45%] relative">
        <img
          src={mandel}
          className="w-20 md:w-25 absolute top-0 left-0 opacity-20"
          alt="زخرفة"
        />

        {/* العنوان والأيقونة */}
        <div className="flex gap-2.5 justify-start items-center z-10 relative">
          <h2 className="text-[#4E2E56] leading-[100%] text-lg md:text-xl lg:text-2xl font-semibold">
            {title}
          </h2>
          <img
            className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 object-contain"
            src={icon}
            alt={`أيقونة ${title}`}
          />
        </div>

        {/* الوصف */}
        <p className="text-xs md:text-sm lg:text-base font-normal text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* الزر */}
        <ServBtn text="المزيد" path={path} />
      </div>

      {/* قسم الصورة - محسن للموبايل */}
      <div className="
        md:w-[55%] w-full
        md:h-full h-[190px] sm:h-[200px]
        bg-gradient-to-br from-gray-100 to-gray-200
         md:rounded-none overflow-hidden
        relative flex items-center justify-center
      ">
        <img
          src={servImage}
          className="
            w-full h-full
            object-cover object-center
          "
          alt={`صورة خدمة ${title}`}
          loading="lazy"
        />
      </div>
    </div>
  )
}
