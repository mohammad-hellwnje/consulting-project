import Input from "../components/ui/Input/Input";
import Label from "../components/ui/Label";

export default function ResetPassword() {
  return (
    <section className="relative flex justify-center items-center reset bg-no-repeat bg-center min-h-screen bg-white w-full">
      {/* طبقة overlay بلون شفاف */}
      <div className="absolute inset-0 bg-[#CB88BB12] z-0"></div>

      {/* المحتوى فوق الطبقة */}
      <form className="relative z-10">
                <div className="text-[#4E2E56] 2xl:mb-9.5 sm:mb-6 mb-5">
          <h2 className="font-light leading-[85px] mb-3 sm:text-[68px] text-3xl">تعيين كلمة مرور جديدة </h2>
          <p className="font-normal sm:leading-11.5 sm:text-[24px]  text-base">
            ادخل كلمة المرور الجديدة لإتمام العملية  بنجاح
          </p>
        </div>
                <Label label="البريد الالكتروني" />
                <Input
                  name="email"
                  type="email"
                  className="!bg-transparent"
                  placeholder="example@email.com"
                />
      </form>
    </section>
  );
}
