import Banner from "../Banner/Banner";
import About from "./About";

import TitleAbout from "./TitleAbout";

function HomeAbout() {
  return (
    <section className="About min-h-[800px] px-[115px] py-[100px]  relative">
      <TitleAbout/>
      <About/>
      <div className=" absolute top-[700px] w-full">
        <Banner message="ابدأ رحلتك التربوية مع أكاديميتنا"
          buttonPrimaryText=" ابدأ رحلتك معي الآن"
          buttonSecondaryText=" اكتشف خدماتنا" />
      </div>
    </section>

  );
}

export default HomeAbout;
