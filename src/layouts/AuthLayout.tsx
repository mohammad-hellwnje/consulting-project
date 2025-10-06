import { useParams } from 'react-router-dom'
import image1 from '../assets/authImage/main.svg'
import Form from '../auth/Form'
import InUpBtn from '../components/ui/Button/InUpBtn'
import { formDataLogin, formDataSignup } from '../Data/formData'
export default function AuthLayout() {
  const  {formType} = useParams();
  const formData = formType === 'login' ? formDataLogin : formDataSignup;

  return (
    <section className="relative overflow-hidden flex justify-between bg-white w-full min-h-screen">
      <div className=" hidden sm:flex flex-col items-end pt-15.5   min-h-full w-[40%] bg-[#3B2241] ">
        <InUpBtn text='إنشاء حساب' path='/auth/signup'/>
        <InUpBtn text=' تسجيل دخول' path='/auth/login'/>
      </div>
      <img src={image1} alt="mandela" className=' hidden sm:block absolute lg:max-h-screen md:max-h-screen sm:max-h-[370px] 2xl:-right-[29%] xl:-right-[40%] lg:-right-[27%] md:-right-[35%] sm:-right-30 md:top-12 sm:top-1/2' />
      <img src={image1} alt="mandela" className='absolute 2xl:w-[300px] w-[200px] lg:-top-24 -top-32 2xl:-top-36 left-0' />
      <img src={image1} alt="mandela" className='absolute sm:hidden 2xl:w-[300px] w-[200px]  -bottom-32  right-0' />

      <div className="2xl:px-[182px] z-20 lg:px-[9.722222%] sm:px-9 px-[10%] py-[35px] flex items-center sm:w-[60%] w-full min-h-full ">
        {formData.map((item, index) => (
          <Form
            key={index}
            title={item.title}
            paragraph={item.paragraph}
            form={item.form}
          />
        ))}
      </div>
    </section>
  )
}
