import circle from '../../assets/circle-1.svg'
import HeroButton from "../ui/Button/HeroButton";
import vector from '../../assets/Vector.svg'
export default function About() {
  return (
      <div>
         <h1 className='mb-2 leading-[220%]  text-white text-4xl w-10/12'>رضا محتسب هي أخصائية اجتماعية ونفسية متخصصة بالمجال التربوي و العلاج المعرفي السلوكي</h1>
         <div className=" flex  items-center gap-2">
          <div className=" relative text-center w-max min-w-[140px]" >
              <h1 className='leading-[220%] mx-6 text-white text-4xl '>تقدم</h1>
              <img src={circle} alt="circle" className="absolute w-full top-0 right-0" />
          </div>
          <h1 className='mb-2 leading-[220%]  text-white text-4xl w-10/12'>استشارات اجتماعية نفسية تربوية أسرية (اونلاين و مباشر)</h1>
         </div>
        <h1 className='mb-4 leading-[220%]  text-white/80 text-[32px] font-semibold w-10/12'>لتاريخ 15/5/2025 تم عمل 40 فنجان بمختلف الأماكن والبلدان : في سوريا : دمشق , الأردن عمان .</h1>
        <div>
          <HeroButton text="المزيد " icon={vector} />
        </div>
      </div>
  )
}
