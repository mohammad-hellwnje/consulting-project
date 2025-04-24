import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}
