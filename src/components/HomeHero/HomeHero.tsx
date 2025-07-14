import woman from '../../assets/hero/hero-woman.svg'
import { buttonDtatHero } from '../../Data/buttonHero'
import Button from '../ui/Button/Button'
import HeroButton from '../ui/Button/HeroButton'
import HeroSubTitle from '../ui/Titles/HeroSubTitle'
import HeroTitle from '../ui/Titles/HeroTitle'
export default function HomeHero() {
  return (
    <section className="h-screen w-full px-[115px] justify-start  items-end bg-top  bg-no-repeat gap-40  flex  "> 
      <div className='w-[32%] h-full flex items-end justify-start'>
        <img src={woman} className='h-[848px]  w-full' alt="رضا محتسب" />
      </div>
      <div className=' w-[61%] flex flex-col justify-end h-full'>
        <HeroTitle/>
        <HeroSubTitle/>
        <div className=' flex items-center gap-8'>
          <Button text={'احجزي استشارة'} className=' text-white bg-[#4B2C53]'/>
          <Button text={'ابدأ رحلتك معي الآن'} className=' bg-white text-[#4B2C53]'/>
        </div>
        <div className=' w-full flex items-center justify-end gap-8 my-[150px]'>
          {buttonDtatHero.map((button) => (
            <HeroButton key={button.label} text={button.label} icon={button.iconSrc} />
          ))}
        </div>
      </div>
    </section>
  )
}
