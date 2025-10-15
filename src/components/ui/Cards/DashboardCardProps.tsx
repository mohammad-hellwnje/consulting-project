import React from "react";
import { IconType } from "react-icons";

interface DashboardCardProps {
  title: string;
  count: number | string;
  icon: IconType;
  color?: string; // لون الأيقونة (text فقط)
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count, icon: Icon }) => {
  return (
    <div
      className="flex items-center justify-between bg-white w-full p-5 rounded-2xl shadow-lg
                 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      {/* النصوص */}
      <div>
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800 mt-1">{count}</p>
      </div>

      {/* الأيقونة */}
      <div
        className="text-3xl p-3 rounded-xl bg-[#3B2241]/60 text-white flex items-center justify-center"
      >
        <Icon />
      </div>
    </div>
  );
};

export default DashboardCard;
