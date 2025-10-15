import ServUi from "../../components/ui/ServUi/ServUi";
import image from "../../assets/hero.webp";
import WorkshopsList from "../../components/WorkshopsList";
export default function Workshops() {
  return (
    <>
      <ServUi
        image={image}
        title="ورشات تطبيقية وواقعية مصمّمة لتلامس احتياجاتك اليومية في التربية والتطوير الذاتي"
        paragraph="ورشات تدريبية متخصّصة تجمع بين المعرفة العلمية والتجربة العملية، لتصل إلى مهارات راسخة قابلة للتطبيق وتمنحك مسارًا واضحًا للتطور والنمو."
        btn="احضري الآن"
      />
      <WorkshopsList/>
    </>
  );
}
