import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function MainLayout() {
  return (
    <section className=" w-full">
      <NavBar/>
      <main>
        <ScrollToTop/>
        <Outlet/>
      </main>
      <Footer/>
    </section>
  )
}
