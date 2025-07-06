import { FaAngleDown } from "react-icons/fa6";

export const NavData = [
  {
    name: "الرئيسية",
    path: "/",
  },
  {
    name: "من نحن",
    path: "/about",
  },
  {
    name: "خدماتنا",
    path: "/services",
    icon: <FaAngleDown />, // أضف الأيقونة هنا كمفتاح جديد
  },
  {
    name: "بودكاست",
    path: "/",
  },
  {
    name: "تواصل معي",
    path: "/contact",
  },
];

