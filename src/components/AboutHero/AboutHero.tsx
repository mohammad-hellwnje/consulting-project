import person from "./../../assets/RedaMuhtaseb.webp";
import madellaL from "./../../assets/about/image_10-removebg-preview 3 (7).png";
import madellaR from "./../../assets/about/image_10-removebg-preview 3.png";
import RedaName from "./../../assets/about/redaName.png";
import about from '../../assets/about.webp'
export default function AboutHero() {
  return (
    <div className="relative bg-[#3B2241] flex lg:flex-row flex-col-reverse  padding-global lg:h-screen min-h-screen ">
      <img src={about} alt="about" className=" w-1/2 absolute top-16   right-0" />
      <div className=" lg:w-[67.125%]">
      <div className=" 2xl:mt-44 xl:mt-36 lg:mt-30 max-[1024px]:flex max-[1024px]:flex-col  max-[1024px]:justify-center max-[1024px]:items-center max-[1024px]:mt-7">
        <div className="flex flex-col items-center lg:w-[70%] max-[1441px]:w-[55%] max-[1024px]:hidden">
          <img
            src={RedaName}
            alt="Reda Muhtaseb"
            className="w-[31%]  max-[1441px]:w-[50%] "
          />
          <span className="font-normal xl:text-[48px] lg:text-4xl text-[#FFFFFF87] 2xl:mb-[39px] xl:mb-8 lg:mb-5 ">
            مستشارة تربوية
          </span>
          <span className="inline-block w-full max-w-[625px] h-1 bg-white max-[1441px]:mr-0"></span>
        </div>
        <div className="text-white lg:w-11/12   ">
          <h3 className=" 
          2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl 2xl:my-9 xl:my-7 lg:my-4 mb-3
            max-[1024px]:text-center">
            نبذة عني :
          </h3>
          <p className=" 2xl:text-[35px]  laptop:text-3xl  lg:text-xl 2xl:leading-15">
            رضا محتسب هي أخصائية اجتماعية ونفسية متخصصة بالمجال التربوي و العلاج
            المعرفي السلوكي وعلاج الإدمانات .
          </p>
          <h4 className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl 2xl:my-9 xl:my-7 lg:my-4 my-3">الخدمات :</h4>
          <p className="2xl:text-[35px] laptop:text-3xl lg:text-xl 2xl:leading-15">استشارات اجتماعية نفسية تربوية أسرية (اونلاين و مباشر)</p>
          <p className="2xl:text-[35px] laptop:text-3xl lg:text-xl 2xl:leading-15">
            دورات للسيدات + يافعات :  اونلاين  ومباشر Group therapy و علاج وقائي
            نفسي
          </p>
          <span className="hidden max-[1024px]:block mx-auto mt-[44px] w-[70.147255%] h-1  bg-white max-[376px]:w-[61.54666%] "></span>
        </div>
      </div>
      </div>
      <div className=" relative lg:h-10/12 h-[437px]   2xl:mt-40 xl:mt-36 lg:mt-30 mt-5 lg:w-[32.875%] flex items-end justify-center  bg-[#FFFFFF17]  rounded-br-4xl rounded-tl-4xl overflow-hidden">
        <img
          src={person}
          alt="Reda Mohtaseb"
          className="block z-10 h-10/12   mr-5"/>
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
      <div className=" w-full flex flex-col items-center justify-center lg:hidden mt-28 ">
            <img
        src={RedaName}
        alt="Reda Muhtaseb"
        className=" hidden  max-[1024px]:flex  mb-[10px] w-[30%] max-[376px]:w-[47.2%]"
      />
      <span className=" hidden max-[1024px]:flex mb-2.5 font-normal xl:text-[48px] lg:text-4xl text-[#FFFFFF87] ">
        مستشارة تربوية
      </span>
      </div>

    </div>
  );
}
