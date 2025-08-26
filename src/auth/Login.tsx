import { NavLink, useNavigate } from "react-router-dom";
import Input from "../components/ui/Input/Input";
import Label from "../components/ui/Label";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useAuth";

export interface FormField<NameType extends string = string> {
  name: NameType;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

interface Form {
  form: FormField[];
}

type FormValues = {
  email: string;
  password: string;
};

export default function Login({ form }: Form) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const { mutate: loginMutate } = useLogin();
  const navigate = useNavigate()
  const onSubmit = (data: FormValues) => {
    loginMutate(data, {
      onSuccess: () => {
        navigate('/')
        // هنا يمكنك إعادة التوجيه لصفحة أخرى
      },
      onError: (err) => {
        console.error("خطأ في تسجيل الدخول:", err);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {form.map((e) => (
        <div className="space-y-1.5 mb-2.5 lg:mb-3.5 2xl:mb-5" key={e.name}>
          <Label label={e.label} />
          <Input
            type={e.type}
            placeholder={e.placeholder}
            error={errors[e.name as keyof FormValues]?.message}
            register={register(e.name as keyof FormValues, { required: e.required ? `${e.label} مطلوب` : false })}
          />
        </div>
      ))}

      <NavLink
        to={"/resetPassword"}
        className="block xl:text-xl lg:text-base text-xs text-[#4E2E56] font-normal text-left"
      >
        نسيت كلمة المرور ؟
      </NavLink>

      <button
        type="submit"
        className="my-5 xl:p-5 p-3.5 bg-[#452949] text-white w-full xl:text-2xl lg:text-lg text-base font-normal rounded-sm"
      >
     تسجيل الدخول
      </button>
    </form>
  );
}
