import titleImage from '../../assets/LOGO (1).png';

export default function TitleAbout() {
  return (
      <div className="xl:mb-25 lg:mb-14 md:mb-9 mb-6 flex gap-2 items-center  justify-center ">
        <h2 className="text-white lg:text-[36px] text-2xl font-normal leading-7 lg:leading-[43.2px] ">
          من هي
        </h2>
        <img src={titleImage} alt="titleimage" className="lg:w-[177px] lg:h-[75px] h-[50px] " />
      </div>
  )
} 
