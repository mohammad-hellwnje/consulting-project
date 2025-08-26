import mandela from '../../../assets/authImage/main.svg'
import frame from '../../../assets/Frame 1686557094.png'
import frame2 from '../../../assets/Fram2.png'
import line from '../../../assets/line-7.png'
import vector from '../../../assets/home.svg'
import { NavLink } from 'react-router-dom';
interface ServicesPagesProps
{
    image : string;
    title : string;
}
export default function ServUi({image , title } : ServicesPagesProps) {
  return (
    <section className=" flex justify-between bg-[#3B2241] h-screen w-full">
       <div className=" h-screen w-[45%]">
       <img className=" w-full h-full " src={image} alt="" />
       </div>
       <div className=" px-10 flex  items-center relative w-[55%] h-full overflow-hidden ">
          <NavLink to={'/'} className=' absolute top-4.5 w-5  z-40'>
            <img src={vector} alt="" />
          </NavLink>
            <img src={mandela} className=' -top-16 -left-16 absolute w-48' alt="" />
            <img src={frame} alt="" className=' absolute left-0 bottom-0'/>
            <img src={frame2} alt="" className=' absolute right-0 top-0'/>
            <div>
                <h1 className=' text-white text-4xl'>{title}</h1>
                <img src={line} alt="" />
            </div>
       </div>
    </section>
  )
}
