import bannericon from './../../assets/image/bannericon.png'
type BannerProps = {
  message: string;
  buttonPrimaryText: string;
  buttonSecondaryText: string;
};

const Banner: React.FC<BannerProps> = ({
  message,
  buttonPrimaryText,
  buttonSecondaryText,
}) => {
  return (
    <div className="bg-[#6D54717D] w-[88%]  h-[178px] rounded-[20px] py-9  px-16 flex justify-between items-center text-white">
      <div className="flex items-center gap-[27px]">
        <div className="bg-white rounded-full w-[90px] h-[90px] flex items-center justify-center">
            <img src={bannericon} alt="icon" />
        </div>
        <p className=" text-xl font-bold">{message}</p>
      </div>
      <div className="flex gap-[48px]">
        <button className="bg-white text-[#44294B] font-normal text-base h-[48px] px-[29px] rounded-sm ">
          {buttonPrimaryText}
        </button>
        <button className="bg-[#44294B] h-[48px] px-[29px] text-lg font-medium rounded-sm">
          {buttonSecondaryText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
