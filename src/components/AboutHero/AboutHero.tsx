import person from "./../../assets/image/RedaMuhtaseb.png";
import madellaL from "./../../assets/about/image_10-removebg-preview 3.png";
import madellaR from "./../../assets/about/image_10-removebg-preview 3 (1).png";
import RedaName from "./../../assets/about/redaName.png";

export default function AboutHero() {
  return (
    <div className=" min-h-screen flex flex-row-reverse  max-[1024px]:flex-col max-[1024px]:items-center">
      <img
        src={RedaName}
        alt="Reda Muhtaseb"
        className="hidden  max-[1024px]:flex  mb-[10px] mt-24 w-[51.80722%] max-[376px]:w-[47.2%]"
      />
      <span className=" hidden max-[1024px]:flex  font-normal text-[48px] text-[#FFFFFF87] max-[375px]:text-2xl">
        مستشارة تربوية
      </span>

      <div className="h-auto self-start  pt-[128px] shrink-0 bg-[#FFFFFF17]  relative rounded-br-[50px] mt-[226px]  max-[1024px]:mt-[50px] w-[31.875%]  max-[1441px]:w-[42.5%]    max-[1024px]:w-[81.92771%] max-[1024px]:mx-auto  max-[376px]:w-[100%] max-[376px]:pt-[17px]  ml-[8px] overflow-hidden">
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
          className="absolute left-0 top-0 w-[33.49673%]"
        />
        <img
          src={madellaR}
          alt="dicore"
          className="absolute right-0 bottom-0 max-[376px]:hidden "
        />
      </div>
      <div className="grow pl-4 max-[748px]:pl-0 max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:justify-center max-[1024px]:items-center">
        <div className="flex flex-col max-[1024px]:hidden">
          <img
            src={RedaName}
            alt="Reda Muhtaseb"
            className="w-[29.984423676%] mr-[31.931464174%] mt-[232px] max-[1441px]:mr-[21.144278607%] max-[1441px]:w-[47.885572139%] "
          />
          <span className="font-normal text-[48px] text-[#FFFFFF87] mr-[36.76923%] mb-[39px] max-[1441px]:mr-[22.23076%]">
            مستشارة تربوية
          </span>
          <span className="inline-block w-[625px] h-1 mr-[20.92307%] bg-white max-[1441px]:w-[76.219512%] max-[1441px]:mr-[3.9024%]"></span>
        </div>
        <div className="w-[96%] mr-[4.05%] mt-[68px] max-[1441px]:mr-[3.99%] max-[1441px]:mt-[63px] max-[1024px]:w-[65.0602%] max-[700px]:w-[95%] max-[748px]:mt-[50px] max-[376px]:mx-0  leading-[156%]  font-normal text-[43px] text-white max-[1441px]:text-[36px]  ">
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
