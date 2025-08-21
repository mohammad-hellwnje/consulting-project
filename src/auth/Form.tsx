import {  NavLink , useParams } from "react-router-dom";
import Label from "../components/ui/Label";
import Input from "../components/ui/Input/Input";
import line from "../assets/authImage/divider.png";
import google from "../assets/authImage/GoogleLogo.png";
import { useMutation } from "@tanstack/react-query";
import { LoginFormData, loginSchema, SignupFormData, signupSchema } from "../schemas/fields";
import { signup } from "../services/signUpAPI";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
export interface FormField {
  name: keyof SignupFormData;
  label: string;
  type: string;
  placeholder: string;
}

export interface FormProps {
  title: string;
  paragraph: string;
  button: string;
  link: string;
  LinkB: string;
  form: FormField[];
}
export default function Form({
  title,
  paragraph,
  form,
  button,
  LinkB,
  link,
}: FormProps) {
  const { formType } = useParams();
   const isSignup = formType === "signup";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData | LoginFormData>({
  resolver: zodResolver(isSignup ? signupSchema : loginSchema),
});

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log("تم التسجيل بنجاح:", data);
      // هنا يمكنك إضافة تنقل أو إشعار
    },
    onError: (error: any) => {
      console.error("خطأ في التسجيل:", error.message || "خطأ غير متوقع");
    },
  });

const onSubmit = (data: any) => {
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
            <Input
              {...register(e.name as keyof SignupFormData)}
              type={e.type}
              placeholder={e.placeholder}
            />
            {errors[e.name as keyof SignupFormData] && (
              <p className="text-red-500 text-sm">
                {errors[e.name as keyof SignupFormData]?.message?.toString()}
              </p>
            )}
          </div>
        ))}

        {formType === "login" ? (
          <NavLink
            to={"/auth/resetPassword"}
            className="block xl:text-xl lg:text-base text-xs text-[#4E2E56] font-normal text-left"
          >
            {LinkB}
          </NavLink>
        ) : (
          <div>
            <input type="checkbox" /> <label>{LinkB}</label>
          </div>
        )}

        <button
          type="submit"
          className="my-5 xl:p-5 p-3.5 bg-[#452949] text-white w-full xl:text-2xl lg:text-lg text-base font-normal rounded-sm"
        >
          {button}
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
        to={formType === "login" ? "/auth/signup" : "/auth/login"}
      >
        <div dangerouslySetInnerHTML={{ __html: link as string }} />
      </NavLink>
    </div>
  );
}
