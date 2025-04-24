import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>من نحن - الاستشارية التربوية</title>
        <meta name="description" content="تعرفي على رسالتنا وفريقنا المتخصص في تقديم الدعم التربوي والنفسي للسيدات." />
        <meta name="keywords" content="منصة تربوية, من نحن, الدعم النفسي, خدمات نسائية, الاستشارية" />
        <meta property="og:title" content="من نحن - الاستشارية التربوية" />
        <meta property="og:description" content="فريق متخصص في التربية والنفسية يقدم ورشات واستشارات مهنية للنساء." />
       {/*  <meta property="og:image" content="/images/about-cover.jpg" />
        <meta property="og:url" content="https://yourdomain.com/about" /> */}
      </Helmet>
      <div>
        About
      </div>
    </>

  )
}
