import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaBars, FaHome, FaCoffee } from "react-icons/fa";
import './SideBar.css'
import { FiGrid, FiHeart, FiMessageSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const navgate = useNavigate()
  return (
      <Sidebar className=" min-h-screen " collapsed={collapsed}>
        <Menu >
          <MenuItem
            icon={<FaBars />}
            className="  bg-[#4E2E56] text-white    "
            onClick={() => setCollapsed(!collapsed)}
          >
            لوحة تحكّم
          </MenuItem>
          <MenuItem
            icon={<FaHome />}
            className="    "
            onClick={() => navgate('/dashboard/')}
          >
            الاساسية 
          </MenuItem>
          <MenuItem
            icon={<FiGrid />}
            onClick={() => navgate('/dashboard/coursesAdmin')}
          >
            الكورسات الحضورية
          </MenuItem>
          <MenuItem
            icon={<FiHeart />}
            onClick={() => navgate('/dashboard/workshopAdmin')}
          >
            الورشات
          </MenuItem>
          <MenuItem
            icon={<FiMessageSquare />}
            onClick={() => navgate('/dashboard/workshopAdmin')}
          >
            الاستشارات
          </MenuItem>
          <MenuItem
            icon={<FaCoffee />}
            onClick={() => navgate('/dashboard/fnjanAdmin')}
          >
            فنجان
          </MenuItem>
{/* 
          <SubMenu title="Components" icon={<FaGem />}>
            <MenuItem>Charts</MenuItem>
            <MenuItem>Tables</MenuItem>
          </SubMenu>
          <MenuItem icon={<FaList />}>Settings</MenuItem> */}
        </Menu>
      </Sidebar>

  );
}

