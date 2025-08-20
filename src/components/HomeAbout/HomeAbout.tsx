import Banner from "../Banner/Banner";
import About from "./About";
import image from '../../assets/blurAbout.png'
import TitleAbout from "./TitleAbout";

function HomeAbout() {
  return (
    <section className="About 2xl:min-h-[800px] h-auto    lg:py-[50px] 2xl:py-[100px]  relative">
      <img className=" absolute bottom-72 rotate-180 left-0" src={image} alt="blur" />
      <div className=" padding-global ">
        <TitleAbout/>
        <About/>
      </div>
      <div className=" xl:mt-25 lg:mt-14 md:mt-9 mt-6 w-full">
        <Banner message="ابدأ رحلتك التربوية معي "
          buttonPrimaryText="انضمِ للفعاليات"
          buttonSecondaryText=" اكتشفِ خدماتنا" />
      </div>
    </section>

  );
}

export default HomeAbout;
