import titleImage from '../../assets/LOGO (1).png';

export default function TitleAbout() {
  return (
      <div className=" mb-28 flex gap-2 items-center  justify-center ">
        <h2 className="text-white text-[36px]  font-normal leading-[43.2px] ">
          من هي
        </h2>
        <img src={titleImage} alt="titleimage" className="w-[177px] h-[75px]  " />
      </div>
  )
} 
