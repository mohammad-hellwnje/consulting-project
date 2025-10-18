import serv from '../../assets/services/service1.webp'
import card from '../../assets/Image.png'
import { BiCalendar, BiCurrentLocation, BiTime, BiUser, } from 'react-icons/bi'
import StateBtn from '../../components/ui/Button/StateBtn'
export default function DetailsPage() {

  return (
    <section className=' pt-32 pb-10 relative overflow-hidden padding-global bg-white'>
      <img src="/public/assets/hero-image.svg" className=' bottom-48 absolute w-98 -left-48 opacity-25 ' alt="" />

      <div className=" mb-7 flex flex-row-reverse gap-5">
        <div className=' h-[450px] w-2/3'>
        <img src={serv} className=" object-cover w-full h-full  rounded-4xl " alt="" />

        </div>
        <div className=" flex bg-primary/10 rounded-3xl flex-col gap-5 items-center p-4 w-1/3  justify-center ">
            <h2 className='text-4xl'>سعر الاشتراك  </h2>
            <span className='text-6xl text-green-600 font-semibold'>500$</span>
            <StateBtn className=' w-[200px] !text-2xl bg-primary text-white'  text='تثبيت الحجز '/>
        </div>
      </div>
      <div className='  flex gap-5 overflow-hidden flex-row-reverse'>
        <div className=' w-2/3'>
            <h2 className='my-5 text-4xl text-primary font-semibold'>رحلة الوعي التربوي: كورس موجه للأمهات والمعلمات</h2>
            <div className=' my-8'>
            <div className='mt-2.5 items-center flex gap-2.5'>
                <div className=' rounded-xl bg-primary/15 w-10 h-10 flex justify-center items-center'>
                <BiCalendar  size={20}/>
                </div>

                <p>تاريخ الورشة : الاثنين 12-10-2025</p>
            </div>
            <div className='mt-2.5 items-center flex gap-2.5'>
                <div className=' rounded-xl bg-primary/15 w-10 h-10 flex justify-center items-center'>
                <BiUser  size={20}/>
                </div>
                <p>عدد المقاعد المتاحة : 55 مقعد </p>
            </div>
            <div className='mt-2.5 items-center flex gap-2.5'>
                <div className=' rounded-xl bg-primary/15 w-10 h-10 flex justify-center items-center'>
                <BiTime  size={20}/>
                </div>
                <div className=' flex gap-3 items-center'>
                    <p>من  الساعة : 5 </p>
                    <p>حتى  الساعة : 6 </p>
                </div>
            </div>
            <div className='mt-2.5 items-center flex gap-2.5'>
                <div className=' rounded-xl bg-primary/15 w-10 h-10 flex justify-center items-center'>
                <BiCurrentLocation  size={20}/>
                </div>
                <p>مكان الفعالية </p>
            </div>
            </div>

            <h2 className=' mt-5 text-xl font-semibold'>وصف الورشة </h2>
            <p className=' mt-2.5 w-10/12'>
                 كورس تفاعلي يهدف إلى تعزيز وعي الأهل بمراحل نمو الطفل، ويقدّم أدوات عملية للتعامل مع التحديات التربوية اليومية.
            </p>
        </div>
        <div className='w-1/3  rounded-2xl overflow-hidden relative'>
            <img src={card} className='  ' alt="" />
            <div className=' flex flex-col items-center justify-end p-4 bg-linear-to-b w-full top-0 z-10 h-full from-[#000000]/0 to-[#000000]/88 absolute'>
              <div className='  w-full mb-5 flex justify-between items-center'>
                <p className=' bg-primary text-sm rounded-sm text-white p-1.5'>احجزي مقعدك</p>
                <p className=' bg-primary text-sm rounded-sm text-white p-1.5'>سجّلي الآن </p>
              </div>
              <h2 className='mb-5 text-white text-2xl'>عنوان الفعالية</h2>
            </div>
        </div>
      </div>
    </section>
  )
}
