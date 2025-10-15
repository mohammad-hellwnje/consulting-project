import WorkshopForm from "../../Dashboard/WorkshopForm";

export default function EditWorkshop() {
  const workshopData = {
    title: "دورة تصميم المواقع الاحترافية",
    price: 120,
    seats: 20,
    date: "2025-10-15",
    description: "تعلم تصميم مواقع احترافية باستخدام HTML و CSS و JS و React.",
    image: "",
  };

  return <WorkshopForm mode="edit" initialData={workshopData} />;
}
