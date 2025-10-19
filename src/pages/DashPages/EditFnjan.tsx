import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FnjanForm from "../../Dashboard/FnjanForm";
import { getFnjanEventById } from "../../services/fnjanApi";

interface FnjanEventData {
  _id?: string;
  title: string;
  price: number;
  seats: number;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  duration: string;
  description: string;
  image?: string;
}

export default function EditFnjan() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [fnjanEventData, setFnjanEventData] = useState<FnjanEventData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFnjanEvent = async () => {
      if (!id) {
        setError("معرف الحدث غير موجود");
        setLoading(false);
        return;
      }

      try {
        const data = await getFnjanEventById(id);
        setFnjanEventData(data);
      } catch (err) {
        console.error("❌ خطأ عند جلب حدث الفنجان:", err);
        setError("فشل تحميل بيانات الحدث");
      } finally {
        setLoading(false);
      }
    };

    fetchFnjanEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-700">
        جاري تحميل البيانات...
      </div>
    );
  }

  if (error || !fnjanEventData) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-600 mb-4">{error || "فشل تحميل الحدث"}</p>
        <button
          onClick={() => navigate("/dashboard/fnjanAdmin")}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-[#a58ae8]"
        >
          العودة للقائمة
        </button>
      </div>
    );
  }

  return (
    <FnjanForm
      mode="edit"
      initialData={fnjanEventData}
      onSubmit={() => navigate("/dashboard/fnjanAdmin")}
    />
  );
}
