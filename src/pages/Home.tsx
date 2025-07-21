import HomeHero from '../components/HomeHero/HomeHero';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import ContactSection from '../components/ContactSection/ContactSection';

import HomeAbout from '../components/HomeAbout/HomeAbout';
import HowWork from '../components/HowWork/HowWork';
import { howWorkSteps } from '../Data/howWorkData';
import FQA from '../components/FQA/FQA';
export default function Home() {
  return (
    <>
      <div className='  overflow-hidden'>
        <HomeHero />
        <HomeAbout/>
        <HowWork steps={howWorkSteps} />
        {/* Home */}
        <ServicesSection />
        <ContactSection />
        <FQA/>
      </div>
    </>       
  );
}
