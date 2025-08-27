import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import LinkUl from "../NavBar/LabScreen/LinkUl";
import AuthBtn from "../ui/Button/AuthBtn";
import { useCurrentUser, useLogout } from "../../hooks/useAuth";

export default function SideBar({ menuOpen, closeMenu } : {menuOpen: boolean; closeMenu: () => void;}) {
  const { data: user, isLoading } = useCurrentUser();
  const { mutate: logout } = useLogout();

  const handleLogout = () => {
    logout();
    closeMenu();
  };
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

      {/* أزرار المستخدم */}
      <div className="my-5 gap-3 flex-col flex items-center xl:gap-8 lg:gap-4">
        {!isLoading && user ? (
          <div className="flex flex-col items-center gap-4">
            {/* زر الداش بورد للأدمن */}
            {user.role === 'admin' && (
              <NavLink
                to="/dashboard"
                onClick={closeMenu}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center"
              >
                لوحة التحكم
              </NavLink>
            )}

            {/* اسم المستخدم */}
            <span className="text-black font-medium text-lg">مرحباً، {user.name}</span>

            {/* زر تسجيل الخروج */}
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              تسجيل الخروج
            </button>
          </div>
        ) : (
          <>
            <AuthBtn text="تسجيل الدخول" path="/auth/login" forceActive={true} />
            <AuthBtn text="إنشاء حساب" path="/auth/signup" />
          </>
        )}
      </div>
    </div>
  );
}
