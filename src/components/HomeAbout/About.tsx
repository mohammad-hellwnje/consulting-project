import circle from '../../assets/circle-1.svg'
import HeroButton from "../ui/Button/HeroButton";
import showMore from '../../assets/show-more.webp'
import AboutText from '../ui/Text/About/AboutText';
export default function About() {
  return (
      <div className=' md:text-right text-center '>      
         <div className=' md:block hidden'>
             <AboutText  text='رضا محتسب هي أخصائية اجتماعية ونفسية متخصصة بالمجال التربوي و العلاج المعرفي السلوكي'/>
          </div>
          <div className=' md:hidden block'>
            <AboutText text='رضا محتسب هي أخصائية اجتماعية ونفسية متخصصة بالمجال التربوي و العلاج المعرفي السلوكي تقدم استشارات اجتماعية نفسية تربوية أسرية (اونلاين و مباشر)'/>
            </div>    
         <div className=" hidden   md:flex items-center gap-3">
          <div className=" relative  w-max 2xl:min-w-[140px]" >
              <h1 className='md:leading-[220%] leading-7 mx-6 text-white xl:text-[28px] lg:text-[24px] md:text-xl text-sm 2xl:text-4xl  '>تقدم</h1>
              <img src={circle} alt="circle" className="absolute w-full xl:top-0 -top-2.5 right-0" />
          </div>
          <AboutText text='استشارات اجتماعية نفسية تربوية أسرية'/>
         </div>

        <h1 className='mb-4 md:block hidden leading-[220%] text-white/80 2xl:text-[32px] lg:text-base text-sm xl:text-[22px] lg:w-10/12'>متخصصة في العلاج المعرفي السلوكي (CBT) وعلاج الإدمانات، ومعتمدة من فريق واعي في علاج إدمان الإباحية.
          رسالتي هي أن أكون معكِ خطوة بخطوة نحو وعي، تعافٍ، وقوة تنبع من الداخل.</h1>
        <div className=' mt-4 md:justify-start items-center flex justify-center w-f'>
          <HeroButton path='/about' text="المزيد " icon={showMore} />
        </div>
      </div>
  )
}
 