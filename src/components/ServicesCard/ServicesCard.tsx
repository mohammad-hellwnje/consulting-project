import "./ServicesCard.css"
import mandella1 from "../../../src/img/service/mandella.webp";
import mandella2 from "../../../src/img/service/mandella2.webp";
import Button from "../ui/Button/Button";


type ServiceItem = {
  image: string;
  icon: string;
  title: string;
  desc: string;
};

type ServicesCardProps = {
  type: string;
  data: ServiceItem;
  larger :boolean;

};


export default function ServicesCard({ type, data, larger  }: ServicesCardProps) {
  return (
    <>
      <div
        className={`relative bg-[#FFFFFF]  w-full h-[524px] rounded-[24px] overflow-hidden  card-shadow  flex ${
          type === "1" ? "flex-row-reverse" : ""
        } 
        // ${larger === true ? "w-[43.072916667%]" : "w-[40.364583333%]"}`}
      >
        <img
          src={data.image}
          alt="service type"
          className="w-[56.831922612%]"
        />
        <div
          className={`    flex flex-col  items-end flex-none w-[35.493349456%] ${
            type === "1" ? "me-[3.3929866989%]" : "ms-[4.2590206186%]"
          } `}
        >
          <div className="  flex flex-row-reverse justify-between  mt-[199.5px]  mb-[24px]  items-center h-[60px]">
            <h3 className="text-[40px] text-[#4E2E56] text-right whitespace-nowrap">
              {data.title}
            </h3>
            <img
              src={data.icon}
              alt="icon "
              className="w-[42px] h-[42px] me-[10%] "
            />
          </div>
          <p className="text-[14px] text-[#828282]  font-normal leading-[150%] text-right   mb-[45px] w-full">
            {data.desc}
          </p>
          <Button text={"اضغط للمزيد"} />
        </div>
        <img
          src={mandella1}
          alt="dicoration"
          className={`absolute top-0 left-0 ${type === "1" ? "" : "hidden"}`}
        />
        <img
          src={mandella2}
          alt="dicoration"
          className={`absolute top-0 right-0 ${type === "1" ? "hidden" : ""}`}
        />
      </div>
    </>
  );
}
// والمانديلا  لازم مرق البيانات والرو ريفيرس 
