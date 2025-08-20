import { NavLink } from "react-router-dom";
import Label from "../components/ui/Label";
import line from "../assets/authImage/divider.png";
import google from "../assets/authImage/GoogleLogo.png";
import { useMutation } from "@tanstack/react-query";
import { SignupFormData } from "../schemas/fields";
import { signup } from "../services/signUpAPI";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export interface SignupFormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export interface SignupFormProps {
  title: string;
  paragraph: string;
  button: string;
  link: string;
  LinkB: string;
  form: SignupFormField[];
}

export default function SignupForm({
  title,
  paragraph,
  form,
  button,
  LinkB,
  link,
}: SignupFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    mode: "onSubmit", // فقط عند الإرسال
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    }
  });

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log("تم التسجيل بنجاح:", data);
      // تنظيف الحقول بعد نجاح التسجيل
      reset({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
      });
      // هنا يمكنك إضافة تنقل أو إشعار
    },
    onError: (error: Error) => {
      console.error("خطأ في التسجيل:", error.message || "خطأ غير متوقع");
    },
  });

  // تنظيف النموذج عند تحميل المكون
  useEffect(() => {
    reset({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    });
  }, [reset]);

  const onSubmit = (data: SignupFormData) => {
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

        <div className="mb-5">
          <input 
            type="checkbox" 
            {...register("termsAccepted" as any)}
            className="ml-2"
          /> 
          <label className="text-[#4E2E56]">{LinkB}</label>
          {errors.termsAccepted && (
            <p className="text-red-500 text-sm mt-1">
              يجب الموافقة على الشروط والأحكام
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="my-5 xl:p-5 p-3.5 bg-[#452949] text-white w-full xl:text-2xl lg:text-lg text-base font-normal rounded-sm disabled:opacity-50"
        >
          {mutation.isPending ? "جاري التسجيل..." : button}
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
        to="/auth/login"
      >
        <div dangerouslySetInnerHTML={{ __html: link as string }} />
      </NavLink>
    </div>
  );
}
