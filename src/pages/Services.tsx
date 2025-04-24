import { Helmet } from "react-helmet";

export default function Services() {
  return (
    <>
        <Helmet>
            <title>خدماتنا - الاستشارية التربوية</title>
            <meta name="description" content="استكشفي الورشات، الكورسات، والاستشارات المقدمة في مجالات التربية والأمومة." />
            <meta name="keywords" content="خدمات تربوية, كورسات, دورات, ورشات, استشارات, نساء" />
            <meta property="og:title" content="خدمات الاستشارية التربوية" />
            <meta property="og:description" content="مجموعة من الخدمات المتخصصة في التربية والأمومة للنساء في الوطن العربي." />
        {/*     <meta property="og:image" content="/images/services-cover.jpg" />
            <meta property="og:url" content="https://yourdomain.com/services" /> */}
        </Helmet>
        <div>
            Services
        </div>
    </>
  )
}
