
export default function NavBar() {
  return (
<<<<<<< Updated upstream
    <div>
      
    </div>
  )
=======
    <>
      <nav
        className={`bg-[#CB88BB12] shadow-[0px_10px_49px_-11px_rgba(126,57,148,0.34)] flex flex-row-reverse items-center justify-between h-[100px] fixed z-[1000] transition-all duration-500 px-8 py-[29px]
  ${
    scrolling
      ? "w-full top-0 left-0 rounded-none"
      : "w-[88.2815%] top-6 left-[5.85925%] rounded-[20px]"
  }`}
      >
        {/* الشعار + الروابط */}
        <div className="flex flex-row-reverse items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[144px] ms-[52px]" />
          </Link>

          {/* روابط التنقل — تظهر فقط في الشاشات الكبيرة */}
          <ul className="hidden lg:flex  flex-row-reverse items-center 2xl:gap-8  2xl:font-semibold 2xltext-[16px] text-[12px] leading-[120%]">
            {NavData.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-4 py-2 rounded-[4px] transition ${
                      isActive
                        ? "bg-[#F5F5F5] text-[#7E3994]"
                        : "text-white hover:text-[#7E3994]"
                    }`
                  }
                >
                  {index === 2 && <FaAngleDown className="mt-0.5" />}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* أزرار تسجيل الدخول — تظهر فقط في الشاشات الكبيرة */}
        <div className="hidden lg:flex flex-row-reverse items-center text-sm">
          <NavLink
            to="/"
            className="font-bold 2xl:text-[16px] text-[10px] leading-[100%] text-white bg-[#CB88BB40] rounded-[4px] py-3 xl:px-8 px-1.5"
          >
            تسجيل الدخول
          </NavLink>
          <NavLink
            to="/"
            className="font-bold 2xl:text-[16px] text-[10px] leading-[100%] text-white border-[2px] rounded-[4px] py-3 xl:px-[34px] px-1.5 me-8"
          >
            إنشاء حساب
          </NavLink>
        </div>

        {/* أيقونة القائمة الجانبية — تظهر فقط في الموبايل */}
        <div className="lg:hidden">
          <FaBars
            className="text-2xl text-white cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </nav>

      <SideBar menuOpen={menuOpen} closeMenu={closeMenu} />

      <SideBar menuOpen={menuOpen} closeMenu={closeMenu} />
    </>
  );
>>>>>>> Stashed changes
}
