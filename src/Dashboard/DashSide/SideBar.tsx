import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaBars, FaHome, FaCoffee } from "react-icons/fa";
import { FiGrid, FiHeart, FiMessageSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <Sidebar
      collapsed={collapsed}
      className={`min-h-screen transition-all duration-300 !border-l !border-l-gray-200 ${
        collapsed ? "w-[40px]" : "w-[200px]"
      }`}
      collapsedWidth="55px"
    >
      <Menu>
        {/* زر الطي */}
        <MenuItem
          icon={<FaBars />}
          className="bg-[#4E2E56] text-white"
          onClick={() => setCollapsed(!collapsed)}
        >
          {!collapsed && "لوحة تحكّم"}
        </MenuItem>

        {/* العناصر */}
        <MenuItem icon={<FaHome />} onClick={() => navigate("/dashboard/")}>
          {!collapsed && "الأساسية"}
        </MenuItem>

        <MenuItem
          icon={<FiGrid />}
          onClick={() => navigate("/dashboard/coursesAdmin")}
        >
          {!collapsed && "الكورسات الحضورية"}
        </MenuItem>

        <MenuItem
          icon={<FiHeart />}
          onClick={() => navigate("/dashboard/workshopAdmin")}
        >
          {!collapsed && "الورشات"}
        </MenuItem>

        <MenuItem
          icon={<FiMessageSquare />}
          onClick={() => navigate("/dashboard/consultingAdmin")}
        >
          {!collapsed && "الاستشارات"}
        </MenuItem>

        <MenuItem
          icon={<FaCoffee />}
          onClick={() => navigate("/dashboard/fnjanAdmin")}
        >
          {!collapsed && "فنجان"}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
