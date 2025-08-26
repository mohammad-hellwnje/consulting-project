import woman from '../../assets/hero/hero-woman.webp'
import { buttonDtatHero } from '../../Data/buttonHero'
import Button from '../ui/Button/Button'
import HeroButton from '../ui/Button/HeroButton'
import HeroSubTitle from '../ui/Titles/HeroSubTitle'
import HeroTitle from '../ui/Titles/HeroTitle'
export default function HomeHero() {
  return (
    <section className="
    h-screen  w-full padding-global
    lg:static relative   
    flex lg:justify-start justify-center items-center lg:flex-row flex-col-reverse  lg:items-end 
    bg-top  bg-no-repeat 
    2xl:gap-10 lg:gap-0 "> 
      <div className=' 
       lg:w-[30%] lg:h-[72%] w-[25%] lg:flex lg:static  hidden  items-end justify-end'>
        <img  src={woman} className='  h-full w-full' alt="رضا محتسب" />
      </div>
      <div className=' lg:justify-end justify-center lg:w-[70%] w-full flex flex-col lg:items-start items-center  h-full'>
        <HeroTitle/>
        <HeroSubTitle/>
        <div className=' flex  items-center gap-8'>
          <Button path='/consulting' text={'احجزي استشارة'} className='2xl:min-w-[312px] 2xl:h-[69px] text-white bg-[#4B2C53]'/>
          <Button path='/services' text={'ابدأ رحلتك معي الآن'} className='2xl:min-w-[312px] 2xl:h-[69px] bg-white text-[#4B2C53]'/>
        </div>
        <div className=' w-full flex lg:justify-end justify-end  laptop:gap-6.5 lg:gap-4 gap-5 2xl:gap-8
         lg:my-[7.5%] my-[4.5%] xl:my-[7.5%]]'>
          {buttonDtatHero.map((button) => (
            <HeroButton path={button.path} key={button.label} text={button.label} icon={button.iconSrc} />
          ))}
        </div>
      </div>
    </section>
  )
}
