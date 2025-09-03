import { Step } from '../types/howWork';
import select from './../assets/select.webp'
import message from './../assets/send-white-icon.webp'
import search from './../assets/image/search.png'
import payicon from './../assets/calendar.webp'
export const howWorkSteps: Step[] = [
  {
    icon: search,
    title: 'تصفحي',
    description: 'اطلعي على الدورات، الورشات المتاحة.',
  },
    {
    icon:select,
    title: 'اختاري',
    description: 'حددي الخدمة التي تناسب اهتماماتك واحتياجاتك.',
  },
    {
    icon: payicon,
    title: 'احجزي',
    description: 'ثبتي موعدك بسهولة بخطوات بسيطة وسريعة.',
  },
  {
    icon: message,
    title: 'شاركي',
    description: 'انضمي في الموعد المحدد واستمتعي بتجربتك.', 
  },

];
