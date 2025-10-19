import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import WorkshopForm from "../../Dashboard/WorkshopForm";
import { getWorkshopById } from "../../services/workshopsApi";

interface WorkshopData {
  _id?: string;
  title: string;
  price: number;
  seats: number;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  image?: string;
}

export default function EditWorkshop() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [workshopData, setWorkshopData] = useState<WorkshopData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkshop = async () => {
      if (!id) {
        setError("معرف الورشة غير موجود");
        setLoading(false);
        return;
      }

      try {
        const data = await getWorkshopById(id);
        setWorkshopData(data);
      } catch (err) {
        console.error("❌ خطأ عند جلب الورشة:", err);
        setError("فشل تحميل بيانات الورشة");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshop();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-700">
        جاري تحميل البيانات...
      </div>
    );
  }

  if (error || !workshopData) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-600 mb-4">{error || "فشل تحميل الورشة"}</p>
        <button
          onClick={() => navigate("/dashboard/workshopAdmin")}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-[#a58ae8]"
        >
          العودة للقائمة
        </button>
      </div>
    );
  }

  return (
    <WorkshopForm
      mode="edit"
      initialData={workshopData}
      onSubmit={() => navigate("/dashboard/workshopAdmin")}
    />
  );
}
