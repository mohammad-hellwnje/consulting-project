import { NavLink, useParams } from "react-router-dom";
import Label from "../ui/Label";

export interface formProps
{
    title: string;
    paragraph : string;
    form : Array<input>;
    button : string;
    LinkB :string;
    link :string | React.ReactNode;
}
export interface input
{
    label: string;
    type: string;
    name: string;
    placeholder: string;
    required: boolean;
    value?: string;
    onClick?: () => void;
}
export default function Form({title , paragraph , form , button , LinkB , link } : formProps) {
  const {formType} = useParams();
/*   const [formValues, setFormValues] = useState<Record<string, string>>({});

  const handleInputChange = (name: string) => (value: string | undefined) => {
    setFormValues(prev => ({
      ...prev,
      [name]: value || ''
    }));
  }; */

  return (
    <div>
      <div className=" text-center space-y-2 mb-4">
        <h2 className=" font-normal font  text-[50px]">{title}</h2>
        <p className=" font-light text-[22px]">{paragraph}</p>
      </div>
        <form action="">
        {form.map((e,i) => (
            <div className=" space-y-1.5 mb-5" key={i}>
                <Label label={e.label}/>
{/*                 <Input 
                  onChange={handleInputChange(e.name)} 
                  value={formValues[e.name] || e.value} 
                  name={e.name} 
                  type={e.type} 
                  placeholder={e.placeholder} 
                  required={e.required}
                  defaultCountry="SY" 
                /> */}
            </div>
        ))}
        {formType == 'login' ?
         (<NavLink to={'/auth/resetPassword'} className='block text-left'>{LinkB}</NavLink>) 
        :
         (<div>
          <input type="checkbox"/> <label>{LinkB}</label>
          </div>)}
         
        <button className="my-5 p-5 bg-gray-400/15 w-full text-xl font-normal rounded-sm">{button}</button>
        </form>
        <NavLink className=' text-center' to={formType == 'login' ? '/auth/signup' : '/auth/login'}>
          <div dangerouslySetInnerHTML={{ __html: link as string }} />
        </NavLink>
    </div>
  )
}
