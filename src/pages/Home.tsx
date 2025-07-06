import { Helmet } from 'react-helmet';
import HomeHero from '../components/HomeHero/HomeHero';
import womanimage from './../assets/image/woman.png'
import womanimage2 from './../assets/image/RedaMuhtaseb.png'
import iconCourses from './../assets/image/coursesicon.png';
import iconCoffee from './../assets/image/cupicon.png';
import iconConsulting from './../assets/image/consultingicon.png';
import titleImage from './../assets/image/titleImage.png';
import AboutIcon from './../assets/image/qualificationsicon.png'
import AboutIcon2 from './../assets/image/pen-icon.png'

import HomeAbout from '../components/HomeAbout/HomeAbout';
import HowWork from '../components/HowWork/HowWork';
import { howWorkSteps } from '../Data/howWorkData';
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
      <div>
        <HomeHero
          title="انا هنا لأرافقكِ في رحلتكِ نحو وعي تربوي ونفسي أعمق، حيث أقدم لكِ الدعم العلمي والعملي من خلال استشارات متخصصة وكورسات تركز على فهم أعمق لاحتياجاتكِ التربوية والنفسية. معًا، "
          description="سنسلك خطوات مدروسة لتحقيق التوازن والنجاح في حياتكِ اليومي"
          primaryButton="احجزي استشارة"
          secondaryButton="ابدأ رحلتك معي الآن"
          imageSrc={womanimage}
          Buttons={[
            {
              label: "استشارات",
              iconSrc: iconConsulting,
            },
            {
              label: "فنجان قوة",
              iconSrc: iconCoffee,
            },
            {
              label: "كورسات",
              iconSrc: iconCourses,
            },
          ]}
        />
        <HomeAbout
          imageUrl={womanimage2}
          titleImage={titleImage}
          heading="من هي"
          tabs={[
            { iconUrl: AboutIcon, label: "مؤهلات" },
            { iconUrl: AboutIcon2, label: "خبرات ومبادرات" },
          ]}
        />
        <HowWork steps={howWorkSteps} />

        {/* Home */}
      </div>
    </>

  )
}
