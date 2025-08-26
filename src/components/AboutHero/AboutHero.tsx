import person from "./../../assets/image/RedaMuhtaseb.png";
import madellaL from "./../../assets/about/image_10-removebg-preview 3.png";
import madellaR from "./../../assets/about/image_10-removebg-preview 3 (1).png";
import RedaName from "./../../assets/about/redaName.png";

export default function AboutHero() {
  return (
    <div className="relative max-[1024px]:static padding-global min-h-screen flex flex-row-reverse  max-[1024px]:flex-col max-[1024px]:items-center max-[376px]:!px-0">
      <img
        src={RedaName}
        alt="Reda Muhtaseb"
        className="  hidden  max-[1024px]:flex  mb-[10px] mt-24 w-[51.80722%] max-[376px]:w-[47.2%]"
      />
      <span className=" hidden max-[1024px]:flex  font-normal text-[48px] text-[#FFFFFF87] max-[375px]:text-2xl">
        مستشارة تربوية
      </span>

      <div className="absolute top-[226px] max-[1024px]:top-6 left-[8px] h-auto   pt-[128px]  bg-[#FFFFFF17]  rounded-br-[50px]    w-[31.875%]  max-[1441px]:w-[42.5%]    max-[1024px]:w-[88.567293%] max-[376px]:w-full  max-[1024px]:relative   overflow-hidden">
        <img
          src={person}
          alt="Reda Mohtaseb"
          className="
            block z-10 w-[52.12418%] h-auto
            mr-[27.45098%]               
            max-[376px]:w-[61.6%] 
          "
        />

        <img
          src={madellaL}
          alt="dicore"
          className="absolute left-0 top-0 w-[33.49673%]  "
        />
        <img
          src={madellaR}
          alt="dicore"
          className="absolute right-0 bottom-0 max-[376px]:hidden "
        />
      </div>
      <div className="max-[748px]:pl-0 max-[1024px]:flex max-[1024px]:flex-col  max-[1024px]:justify-center max-[1024px]:items-center max-[1024px]:mt-7">
        <div className="flex flex-col items-center w-[70%] max-[1441px]:w-[55%] max-[1024px]:hidden">
          <img
            src={RedaName}
            alt="Reda Muhtaseb"
            className="w-[31%] mt-[232px] max-[1441px]:w-[50%] "
          />
          <span className="font-normal text-[40px] text-[#FFFFFF87] mb-[39px] ">
            مستشارة تربوية
          </span>
          <span className="inline-block w-full max-w-[625px] h-1 bg-white max-[1441px]:mr-0"></span>
        </div>
        <div className="w-[70%] max-[1441px]:w-[55%]  mt-[68px]  max-[1441px]:mt-[63px] max-[1024px]:w-[85%]  max-[748px]:mt-[50px]   leading-[156%]  font-normal text-[36px] text-white   ">
          <h3 className=" text-[64px]  mb-9 max-[1441px]:mb-[41px] max-[748px]:mb-[50px] max-[1024px]:text-center">
            نبذة عني :
          </h3>
          <p>
            رضا محتسب هي أخصائية اجتماعية ونفسية متخصصة بالمجال التربوي و العلاج
            المعرفي السلوكي وعلاج الإدمانات .
          </p>
          <h4>الخدمات :</h4>
          <p>استشارات اجتماعية نفسية تربوية أسرية (اونلاين و مباشر)</p>
          <p>
            دورات للسيدات + يافعات : اونلاين ومباشر Group therapy و علاج وقائي
            نفسي
          </p>
          <span className="hidden max-[1024px]:block mx-auto mt-[44px] w-[70.147255%] h-1  bg-white max-[376px]:w-[61.54666%] "></span>
        </div>
      </div>
    </div>
  );
}
