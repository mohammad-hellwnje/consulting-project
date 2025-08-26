import Input from "../components/ui/Input/Input";
import Label from "../components/ui/Label";

export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}
interface Form 
{
    form: FormField[];
}
export default function SignUp({form} : Form) {
  
  return (
      <form>
        {form.map((e, i) => (
          <div
            className="space-y-1.5 2xl:mb-5 lg:mb-3.5 mb-2.5"
            key={i}
          >
            <Label label={e.label} />
            <Input
              type={e.type}
              placeholder={e.placeholder}
            />
          </div>
        ))}
        <div>
         <input type="checkbox" name="privce" id="" />
         <p>أوافق على السياسة والخصوصية</p>
        </div>
        <button
          type="submit"
          className="my-5 xl:p-5 p-3.5 bg-[#452949] text-white w-full xl:text-2xl lg:text-lg text-base font-normal rounded-sm"
        >
        تسجيل الدخول       
        </button>

      </form>
  )
}
