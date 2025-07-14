import { Helmet } from 'react-helmet';
import HomeHero from '../components/HomeHero/HomeHero';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import ContactSection from '../components/ContactSection/ContactSection';

import HomeAbout from '../components/HomeAbout/HomeAbout';
import HowWork from '../components/HowWork/HowWork';
import { howWorkSteps } from '../Data/howWorkData';
export default function Home() {
  return (
    <>
      {/* For SEO  */}
      <Helmet>
        <title>Reda Muhtaseb</title>
        <meta
          name="description"
          content="منصة استشارية تربوية تقدم ورشات، فعاليات، دورات واستشارات للسيدات في مجالات التربية، الأمومة، والعلاقات."
        />
        <meta
          name="keywords"
          content="تربية, استشارات, ورشات, أمومة, كورسات, فعاليات, نساء, الوطن العربي"
        />
        <meta property="og:title" content="الاستشارية التربوية" />
        <meta property="og:description" content="ورشات ودورات واستشارات نسائية متخصصة في التربية والأمومة." />
        <meta
          property="og:description"
          content="ورشات ودورات واستشارات نسائية متخصصة في التربية والأمومة."
        />
        {/*  <meta property="og:image" content="/images/home-cover.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" /> */}
      </Helmet>
      {/* end */}
      <div className='  overflow-hidden'>
        <HomeHero />
        <HomeAbout/>
        <HowWork steps={howWorkSteps} />
        {/* Home */}
        <ServicesSection />
        <ContactSection />
      </div>
    </>       
  );
}
