import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import Input from "../components/ui/Input/Input";
import Label from "../components/ui/Label";
import { useResetPassword } from "../hooks/useAuth";

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>();
  const { mutate: resetPassword, isPending } = useResetPassword();
  const [resetCode, setResetCode] = useState<string>("");

  const password = watch("password");

  useEffect(() => {
    // استخراج resetCode من الرابط
    const code = searchParams.get('code') || searchParams.get('token') || searchParams.get('resetCode');
    if (code) {
      setResetCode(code);
    } else {
      // إذا لم يكن هناك كود، إعادة توجيه للصفحة الرئيسية
      navigate('/');
    }
  }, [searchParams, navigate]);

  const onSubmit = (data: FormValues) => {
    if (!resetCode) {
      toast.error("رمز إعادة التعيين غير صالح");
      return;
    }

    resetPassword({
      resetCode,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    }, {
      onSuccess: (response) => {
        if (response.status === "success") {
          toast.success("تم تحديث كلمة المرور بنجاح");
          navigate('/auth/login');
        }
      },
      onError: () => {
        toast.error("حدث خطأ في إعادة تعيين كلمة المرور");
      },
    });
  };
  return (
    <section className="relative flex justify-center items-center reset bg-no-repeat bg-center min-h-screen bg-white w-full">
      {/* طبقة overlay بلون شفاف */}
      <div className="absolute inset-0 bg-[#CB88BB12] z-0"></div>

      {/* المحتوى فوق الطبقة */}
      <form onSubmit={handleSubmit(onSubmit)} className="relative z-10">
        <div className="text-[#4E2E56] 2xl:mb-9.5 sm:mb-6 mb-5">
          <h2 className="font-light leading-[85px] mb-3 sm:text-[68px] text-3xl">تعيين كلمة مرور جديدة</h2>
          <p className="font-normal sm:leading-11.5 sm:text-[24px] text-base">
            ادخل كلمة المرور الجديدة لإتمام العملية بنجاح
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <Label label="البريد الالكتروني" />
            <Input
              type="email"
              className="!bg-transparent"
              placeholder="example@email.com"
              error={errors.email?.message}
              register={register("email", {
                required: "البريد الإلكتروني مطلوب",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "البريد الإلكتروني غير صالح"
                }
              })}
            />
          </div>

          <div>
            <Label label="كلمة المرور الجديدة" />
            <Input
              type="password"
              className="!bg-transparent"
              placeholder="ادخل كلمة المرور الجديدة"
              error={errors.password?.message}
              register={register("password", {
                required: "كلمة المرور مطلوبة",
                minLength: {
                  value: 6,
                  message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
                }
              })}
            />
          </div>

          <div>
            <Label label="تأكيد كلمة المرور الجديدة" />
            <Input
              type="password"
              className="!bg-transparent"
              placeholder="ادخل تأكيد كلمة المرور"
              error={errors.confirmPassword?.message}
              register={register("confirmPassword", {
                required: "تأكيد كلمة المرور مطلوب",
                validate: (value: string) => value === password || "كلمات المرور غير متطابقة"
              })}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="mt-6 text-white bg-[#3B2241] rounded-3xl w-[236px] h-[63px] text-xl font-medium text-center disabled:opacity-50 hover:bg-[#2a1a2f] transition-colors"
        >
          {isPending ? "جاري الإرسال..." : "تحديث كلمة المرور"}
        </button>
      </form>
    </section>
  );
}
