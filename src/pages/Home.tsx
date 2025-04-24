import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      {/* For SEO  */}
      <Helmet>
        <title>الرئيسية - الاستشارية التربوية</title>
        <meta name="description" content="منصة استشارية تربوية تقدم ورشات، فعاليات، دورات واستشارات للسيدات في مجالات التربية، الأمومة، والعلاقات." />
        <meta name="keywords" content="تربية, استشارات, ورشات, أمومة, كورسات, فعاليات, نساء, الوطن العربي" />
        <meta property="og:title" content="الاستشارية التربوية" />
        <meta property="og:description" content="ورشات ودورات واستشارات نسائية متخصصة في التربية والأمومة." />
       {/*  <meta property="og:image" content="/images/home-cover.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" /> */}
      </Helmet>
      {/* end */}
        <div>
            Home
        </div>
    </>

  )
}
