import ServUi from "../../components/ui/ServUi/ServUi";
import image from "../../assets/courses.webp";
export default function Courses() {
  return (
    <>
      <ServUi
        image={image}
        title="ابدأ رحلتك التعليمية معنا بكورسات تربوية ونفسية مصمّمة لتناسب احتياجك اليومي"
        paragraph="دورات متكاملة  مصممة لتزويدك بالمعرفة التربوية والنفسية العميقة، تقدّم المعرفة بخطوات واضحة،من خلال برامج تدريبية منهجية تمنحك محتوى علمي متدرّج، وأدوات عملية لتبني أساسًا متينًا من الفهم والمهارة."
        btn="سجّلي الآن"
      />
    </>
  );
}
