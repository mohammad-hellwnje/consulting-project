import image from '../assets/authImage/image 9.png'
import image3 from '../assets/authImage/image 8.png'
import Form from '../auth/Form'
import { NavLink, useParams } from 'react-router-dom'
import { useState } from 'react';
import { formDataLogin, formDataSignup } from '../Data/formData';
export default function AuthLayout() {
  const {formType} = useParams();
  
  const [isActive,setActieve] = useState(formType);

  return (
    <section className="min-h-screen flex justify-center items-center overflow-hidden relative">
      <img src={image} alt="mandela" className='absolute top-0 left-0' />
      <div className=' w-1/4 h-full absolute top-0 flex flex-col items-end right-0 z-10 bg-[#CB88BB]/7'>
        <NavLink onClick={() => setActieve('login') } to={'/auth/login'} className={ `${isActive == 'login'? 'bg-white' :''}   flex justify-center items-center mt-16 mb-5 rounded-r-full  w-[134px] p-5 h-[70px]`} >
          <p>تسجيل الدخول</p>
        </NavLink>
        <NavLink onClick={() => setActieve('signup')} to={'/auth/signup'} className={` ${isActive == 'signup' ? 'bg-white' :''} flex justify-center items-center  mb-5 rounded-r-full  w-[134px] p-5 h-[70px]`}>
          <p>إنشاء حساب </p>
        </NavLink>
      </div>
      <img src={image3} alt="mandela" className='absolute h-full right-0 top-0' />
      {formType == 'login' ? 
       (<Form link={formDataLogin[0].link} LinkB={formDataLogin[0].LinkB} button={formDataLogin[0].button} title={formDataLogin[0].title} paragraph={formDataLogin[0].paragraph} form={formDataLogin[0].form}/>) :
       (<Form link={formDataSignup[0].link} LinkB={formDataSignup[0].LinkB} button={formDataSignup[0].button} title={formDataSignup[0].title} paragraph={formDataSignup[0].paragraph} form={formDataSignup[0].form}/>) }
     
    </section>
  )
}
