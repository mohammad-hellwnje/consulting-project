import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>تواصل معنا - الاستشارية التربوية</title>
        <meta name="description" content="تواصلي معنا لحجز استشارة أو الاستفسار عن الخدمات المقدمة في المنصة." />
        <meta name="keywords" content="تواصل, استشارات, حجز, خدمات نسائية, استفسارات" />
        <meta property="og:title" content="تواصل معنا - الاستشارية التربوية" />
        <meta property="og:description" content="نحن هنا لمساعدتك! تواصلي معنا لحجز استشارات أو الاستفسار عن الورشات." />
       {/*  <meta property="og:image" content="/images/contact-cover.jpg" />
        <meta property="og:url" content="https://yourdomain.com/contact" /> */}
      </Helmet>
      <div>
       Contact
      </div>
    </>

  )
}
