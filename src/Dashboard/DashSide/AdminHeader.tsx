import React from "react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

interface AdminHeaderProps {
  adminName: string;
  onLogout: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ adminName, onLogout }) => {
  return (
    <header className="w-full bg-white py-1.5 px-6 shadow-md flex items-center justify-between ">
      {/* اسم لوحة التحكم */}
      <h1 className="text-lg font-semibold tracking-wide">لوحة تحكم الأدمن</h1>

      {/* القسم الأيمن (اسم الأدمن + زر الخروج) */}
      <div className="flex items-center gap-4">
        {/* اسم الأدمن */}
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl text-white/90" />
          <span className="font-medium text-white">{adminName}</span>
        </div>

        {/* زر تسجيل الخروج */}
        <button
          onClick={onLogout}
          className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-4 py-2 rounded-xl transition-all duration-300"
        >
          <FaSignOutAlt className="text-lg" />
          <span className="hidden sm:inline">تسجيل الخروج</span>
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
