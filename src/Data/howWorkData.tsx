import { Step } from '../types/howWork';
import laptop from './../assets/image/laptop.png'
import message from './../assets/image/message.png'
import search from './../assets/image/search.png'
import payicon from './../assets/image/pay.png'
export const howWorkSteps: Step[] = [
  {
    icon: laptop,
    title: 'ابدأ الآن',
    description: ' تصفح المحتوى أو احجز جلستك',
  },
    {
    icon:search,
    title: 'اختيار الخدمة المناسبة',
    description: ' تصفحي الكورسات أو الاستشارات واختاري الأنسب لإلك',
  },
    {
    icon: payicon,
    title: 'اختيار وسيلة الدفع',
    description: 'بطاقة الائتمان، مدى، أو تحويل بنكي يدوي',
  },
  {
    icon: message,
    title: 'تفعيل الحساب بعد لاتمام الدفع',
    description: 'سجل دخول  ليتم اتمام عملية الدفع  اونلاين ', 
  },

];
