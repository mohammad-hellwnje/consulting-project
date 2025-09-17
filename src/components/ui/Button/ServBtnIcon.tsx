import { NavLink } from "react-router-dom";
import whatsapp from '../../../assets/logos_whatsapp.webp'
export default function ServBtnIcon({text} : { text : string}) {
  return (
    <NavLink to={'https://wa.me/971501234567'} target="_balank" className={` w-max p-3.5 rounded-full my-10 flex items-center gap-1 text-white bg-[#69596C]`}>
      {text} 
      <img src={whatsapp} alt="whatsapp"  className=" w-5"/>
    </NavLink>
  )
}
