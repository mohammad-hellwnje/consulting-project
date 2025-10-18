import FnjanForm from "../../Dashboard/FnjanForm";

export default function EditFnjan() {
  const fnjanEventData = {
    title: "حدث فنجان جديد",
    price: 50,
    seats: 30,
    date: "2025-10-20",
    description: "حدث فنجان مميز مع ضيوف خاصين.",
    image: "",
  };

  return <FnjanForm mode="edit" initialData={fnjanEventData} />;
}

