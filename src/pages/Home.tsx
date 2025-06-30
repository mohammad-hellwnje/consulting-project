import { Helmet } from 'react-helmet';
<<<<<<< Updated upstream
=======
import ServicesSection from '../components/ServicesSection/ServicesSection';
import ContactSection from '../components/ContactSection/ContactSection';

>>>>>>> Stashed changes

export default function Home() {
  return (
    <>
      {/* For SEO  */}
      <Helmet>
        <title>Reda Muhtaseb</title>
        <meta name="description" content="منصة استشارية تربوية تقدم ورشات، فعاليات، دورات واستشارات للسيدات في مجالات التربية، الأمومة، والعلاقات." />
        <meta name="keywords" content="تربية, استشارات, ورشات, أمومة, كورسات, فعاليات, نساء, الوطن العربي" />
        <meta property="og:title" content="الاستشارية التربوية" />
        <meta property="og:description" content="ورشات ودورات واستشارات نسائية متخصصة في التربية والأمومة." />
       {/*  <meta property="og:image" content="/images/home-cover.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" /> */}
      </Helmet>
      {/* end */}
<<<<<<< Updated upstream
        <div>
            Home
        </div>
=======
      <div>
       
        <ServicesSection />
        <ContactSection />

      </div>
>>>>>>> Stashed changes
    </>

  )
}
