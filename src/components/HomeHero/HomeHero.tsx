import woman from '../../assets/hero/hero-woman.webp'
import { buttonDtatHero } from '../../Data/buttonHero'
import Button from '../ui/Button/Button'
import HeroButton from '../ui/Button/HeroButton'
import HeroSubTitle from '../ui/Titles/HeroSubTitle'
import HeroTitle from '../ui/Titles/HeroTitle'
export default function HomeHero() {
  return (
    <section className="h-screen w-full 2xl:px-[115px] lg:px-[100px] justify-start  items-end bg-top  bg-no-repeat lg:gap-15 2xl:gap-40  flex  "> 
      <div className='w-[32%]  h-full flex items-end justify-end'>
        <img  src={woman} className='2xl:h-[700px] h-[620px]  w-full' alt="رضا محتسب" />
      </div>
      <div className='2xl:w-[61%]  justify-end lg:w-[70%] flex flex-col  h-full'>
        <HeroTitle/>
        <HeroSubTitle/>
        <div className=' flex   items-center gap-8'>
          <Button text={'احجزي استشارة'} className=' text-white bg-[#4B2C53]'/>
          <Button text={'ابدأ رحلتك معي الآن'} className=' bg-white text-[#4B2C53]'/>
        </div>
        <div className=' w-full flex items-center justify-end lg:gap-6.5 2xl:gap-8 lg:my-20 2xl:my-[150px]'>
          {buttonDtatHero.map((button) => (
            <HeroButton key={button.label} text={button.label} icon={button.iconSrc} />
          ))}
        </div>
      </div>
    </section>
  )
}
