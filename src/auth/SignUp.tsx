import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input/Input";
import Label from "../components/ui/Label";
import { useForm } from "react-hook-form";
import { useSignUp } from "../hooks/useAuth";

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
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  privacy: boolean;
};

export default function SignUp({ form }: Form) {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>();
  const { mutate: signUpMutate, isPending } = useSignUp();
  const navigate = useNavigate();

  const password = watch("password");

  const onSubmit = (data: FormValues) => {
    if (!data.privacy) {
      alert("يجب الموافقة على السياسة والخصوصية");
      return;
    }

    const { ...signUpData } = data;
    signUpMutate(signUpData, {
      onSuccess: () => {
        navigate('/');
      },
      onError: (err: Error) => {
        console.error("خطأ في إنشاء الحساب:", err);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {form.map((e, i) => (
        <div className="space-y-1.5 2xl:mb-5 lg:mb-3.5 mb-2.5" key={i}>
          <Label label={e.label} />
     <Input
            type={e.type}
            placeholder={e.placeholder}
            error={errors[e.name as keyof FormValues]?.message}
            register={register(e.name as keyof FormValues, { required: e.required ? `${e.label} مطلوب` : false })}
          />
          
        </div>
      ))}

      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          id="privacy"
          {...register("privacy", { required: "يجب الموافقة على السياسة والخصوصية" })}
          className="w-4 h-4"
        />
        <label htmlFor="privacy" className="text-sm text-[#4E2E56]">
          أوافق على السياسة والخصوصية
        </label>
      </div>
      {errors.privacy && (
        <p className="text-red-500 text-sm mb-2">{errors.privacy.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="my-5 xl:p-5 p-3.5 bg-[#452949] text-white w-full xl:text-2xl lg:text-lg text-base font-normal rounded-sm disabled:opacity-50"
      >
        {isPending ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
      </button>
    </form>
  );
}
