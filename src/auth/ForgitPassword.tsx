import { useForm } from "react-hook-form";
import Input from "../components/ui/Input/Input";
import Label from "../components/ui/Label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { resetPass } from "../services/rsestAPI";
import { forgetPasswordSchema } from "../schemas/fields";
import { useState } from "react";

interface forgitPasswordProps {
  email: string;
}

export default function ForgitPassword() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<forgitPasswordProps>({
    resolver: zodResolver(forgetPasswordSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: resetPass,
onSuccess: (response) => {
  const data = response?.data ?? response; // يتأكد إن كان داخل .data
  if (data.status === "success") {
    setSuccessMessage("تم إرسال رمز التحقق إلى بريدك الإلكتروني.");
    reset();
  }
},
    onError: (error: Error) => {
      console.error("خطأ:", error.message || "حدث خطأ غير متوقع");
    },
  });

  const onSubmit = (data: forgitPasswordProps) => {
    setSuccessMessage(null); // إخفاء الرسالة السابقة
    mutation.mutate(data);
  };

  return (
    <section className="relative flex justify-center px-9.5 items-center reset bg-no-repeat bg-center min-h-screen bg-white w-full">
      <div className="absolute inset-0 bg-[#CB88BB12] z-0"></div>

      <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 flex flex-col items-center">
        <div className="text-[#4E2E56] 2xl:mb-9.5 sm:mb-6 mb-5">
          <h2 className="font-light leading-[85px] mb-3 sm:text-[68px] text-3xl">نسيت كلمة المرور ؟</h2>
          <p className="font-normal sm:leading-11.5 sm:text-[24px]  text-base">
            ادخل بريدك الالكتروني لإعادة تعيين كلمة المرور
          </p>
        </div>

        <Label label="البريد الالكتروني" />
        <Input
          name="email"
          type="email"
          className="!bg-transparent"
          placeholder="example@email.com"
          error={errors.email?.message}
          register={register("email")}
        />

        {/* ✅ رسالة النجاح */}
        {successMessage && (
          <p className="text-green-600 text-sm mt-4">{successMessage}</p>
        )}

        <button className="mt-8 text-white bg-[#3B2241] rounded-3xl w-[236px] h-[63px] text-xl font-medium text-center">
          ارسال
        </button>
      </form>
    </section>
  );
}
