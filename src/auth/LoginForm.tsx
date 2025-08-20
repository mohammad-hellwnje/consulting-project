import { NavLink } from "react-router-dom";
import Label from "../components/ui/Label";
import line from "../assets/authImage/divider.png";
import google from "../assets/authImage/GoogleLogo.png";
import { useMutation } from "@tanstack/react-query";
import { LoginFormData } from "../schemas/fields";
import { login } from "../services/loginAPI";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export interface LoginFormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export interface LoginFormProps {
  title: string;
  paragraph: string;
  button: string;
  link: string;
  LinkB: string;
  form: LoginFormField[];
}

export default function LoginForm({
  title,
  paragraph,
  form,
  button,
  LinkB,
  link,
}: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("تم تسجيل الدخول بنجاح:", data);
      // تنظيف الحقول بعد نجاح تسجيل الدخول
      reset({
        email: "",
        password: "",
      });
      // هنا يمكنك إضافة تنقل أو إشعار
    },
    onError: (error: Error) => {
      console.error("خطأ في تسجيل الدخول:", error.message || "خطأ غير متوقع");
    },
  });

  // تنظيف النموذج عند تحميل المكون
  useEffect(() => {
    reset({
      email: "",
      password: "",
    });
  }, [reset]);

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="w-full">
      <div className="z-50 text-center text-[#4E2E56] space-y-2 2xl:mb-9 sm:mb-6 mb-5">
        <h2 className="font-medium xl:text-[50px] text-4xl">{title}</h2>
        <p className="font-normal leading-6.5 xl:text-[22px] text-lg">
          {paragraph}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {form.map((e, i) => (
          <div
            className="space-y-1.5 2xl:mb-5 lg:mb-3.5 mb-2.5"
            key={i}
          >
            <Label label={e.label} />
            <input
              {...register(e.name as any)}
              type={e.type}
              placeholder={e.placeholder}
              className="w-full xl:px-4 xl:py-[23px] lg:p-4 p-3 border border-[#4E2E56] rounded-md focus:outline-none focus:ring-1 focus:ring-[#4E2E56] focus:border-transparent bg-white placeholder:text-gray-400 placeholder:text-sm"
            />
            {(errors as any)[e.name] && (
              <p className="text-red-500 text-sm">
                {(errors as any)[e.name]?.message?.toString()}
              </p>
            )}
          </div>
        ))}

        <NavLink
          to={"/resetPassword"}
          className="block xl:text-xl lg:text-base text-xs text-[#4E2E56] font-normal text-left"
        >
          {LinkB}
        </NavLink>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="my-5 xl:p-5 p-3.5 bg-[#452949] text-white w-full xl:text-2xl lg:text-lg text-base font-normal rounded-sm disabled:opacity-50"
        >
          {mutation.isPending ? "جاري تسجيل الدخول..." : button}
        </button>

        <div className="lg:my-0 overflow-hidden 2xl:my-6 flex gap-3 justify-center items-center">
          <img src={line} alt="" />
          <span className="xl:text-xl text-base leading-6 text-[#4E2E56]">أو</span>
          <img src={line} alt="" />
        </div>

        <button
          type="button"
          className="xl:my-5 sm:my-4 my-3 lg:mb-4 xl:p-5 p-3.5 gap-3.5 text-[#4E2E56] border border-[#4E2E56] w-full xl:text-2xl lg:text-lg text-base font-medium rounded-sm flex items-center justify-center"
        >
          <span className="">تسجيل دخول عبر غوغل</span>
          <img src={google} alt="" className="xl:w-auto lg:w-6 w-5" />
        </button>
      </form>

      <NavLink
        className="xl:text-2xl sm:text-base text-sm text-[#4E2E56] font-normal text-center"
        to="/auth/signup"
      >
        <div dangerouslySetInnerHTML={{ __html: link as string }} />
      </NavLink>
    </div>
  );
}
