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
    path: "/#services",
    icon: <FaAngleDown />,
  },
  {
    name: "بودكاست",
    path: "/podacst",
    soon: true,
  },
  {
    name: "تواصل معي",
    path: "/contact",
  },
];

