import { Step } from '../types/howWork';
import laptop from './../assets/image/laptop.png'
import message from './../assets/image/message.png'
import search from './../assets/image/search.png'
import payicon from './../assets/image/pay.png'
export const howWorkSteps: Step[] = [
  {
    icon: laptop,
    title: 'إنشاء الآلة',
    description: 'ابدأ المشروع أو أضف منتجك',
  },
  {
    icon: message,
    title: 'تفعيل الحساب بعد إنهاء الدفع',
    description: 'إن لم يتم تفعيل آلي، سيتم تفعيله يدوياً خلال دقائق',
  },
  {
    icon:search,
    title: 'اختيار الباقة المناسبة',
    description: 'يمكنك الاختيار بين الاشتراكات أو الدفع لكل آلة',
  },
  {
    icon: payicon,
    title: 'اختيار وسيلة الدفع',
    description: 'بطاقة الائتمان، مدى، أو تحويل بنكي يدوي',
  },
];
