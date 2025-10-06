import { NavLink, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
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
  const { mutate: loginMutate, isPending } = useLogin();
  const navigate = useNavigate();
  const onSubmit = (data: FormValues) => {
    loginMutate(data, {
      onSuccess: (response) => {
        if (response.status === "success") {
          toast.success("تم تسجيل الدخول بنجاح");
          navigate('/');
        }
      },
      onError: () => {
        toast.error("خطأ في تسجيل الدخول. تحقق من البيانات المدخلة.");
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
        className="block xl:text-xl w-fit justify-self-end lg:text-base text-xs text-[#4E2E56] font-normal text-left"
      >
        نسيت كلمة المرور ؟
      </NavLink>

      <button
        type="submit"
        disabled={isPending}
        className="my-5 xl:p-5 p-3.5 bg-[#452949] text-white w-full xl:text-2xl lg:text-lg text-base font-normal rounded-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5a3560] transition-colors"
      >
        {isPending ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
      </button>
    </form>
  );
}
