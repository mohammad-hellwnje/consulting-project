import ServUi from "../../components/ui/ServUi/ServUi";
import ConsultingImage from '../../assets/consulting.webp'
export default function Consulting() {
  return (
    <>
       <ServUi image={ConsultingImage} 
       title="مرحبًا بك في  استشارات التربوية والنفسية بخصوصية واحترافية"
       paragraph='مساحة آمنة للاستماع لمشكلتك، وتقديم إرشاد عملي يساعدك على تجاوز التحديات التربوية والنفسية بوعي واتزان.'
       btn = 'احجز استشارتك '/>
    </>
  )
}
