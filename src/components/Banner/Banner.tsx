import Button from '../ui/Button/Button';
import bannericon from './../../assets/bannericon.webp'
type BannerProps = {
  message: string;
  buttonPrimaryText: string;
  buttonSecondaryText: string;
};

const Banner: React.FC<BannerProps> = ({
  message,
  buttonSecondaryText,
}) => {
  return (
    <div className="bg-[#6D54717D] margin-global  2xl:h-[178px] md:rounded-[20px] rounded-2xl xl:py-8 2xl:py-9  xl:px-16 lg:py-5 p-3.5 lg:px-10 flex justify-between items-center text-white">
      <div className="flex items-center xl:gap-[27px] gap-4">
        <div className="bg-white rounded-full 2xl:w-[90px] xl:w-[80px] xl:h-[80px] lg:w-15  lg:h-15 md:w-10 w-8 h-8 md:h-10  2xl:h-[90px] flex items-center justify-center">
            <img src={bannericon} className=' xl:w-auto lg:w-10 md:w-7 w-5' alt="icon" />
        </div>
        <p className=" xl:text-xl lg:text-base md:text-sm text-xs font-medium">{message}</p>
      </div>
      <div className="flex xl:gap-9 lg:gap-4 gap-2.5">
        <Button path='#services' text={buttonSecondaryText} className='  bg-white text-[#4B2C53] '/>
      </div>
    </div>
  );
};

export default Banner;
