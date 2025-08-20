import { FaTimes } from "react-icons/fa";
import LinkUl from "../NavBar/LabScreen/LinkUl";
import AuthBtn from "../ui/Button/AuthBtn";

export default function SideBar({ menuOpen, closeMenu } : {menuOpen: boolean; closeMenu: () => void;}) {
  return (
    <div
      className={` fixed top-0 left-0 h-screen w-screen z-[1001] transition-all duration-300 ease-in-out 
      ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      backdrop-blur-md bg-white/30`}
    >
      {/* زر الإغلاق */}
      <div className="flex justify-end p-4">
        <FaTimes
          className="text-3xl text-black cursor-pointer"
          onClick={closeMenu}
        />
      </div>

      {/* القائمة كاملة */}
      <LinkUl/>
          <div className=" my-5 gap-3 flex-col flex items-center xl:gap-8 lg:gap-4">
            <AuthBtn text="تسجيل الدخول" path="/auth/login" forceActive={true} />
            <AuthBtn text="إنشاء حساب" path="/auth/signup" />
          </div>
    </div>
  );
}
