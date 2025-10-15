// src/components/Workshops/WorkshopsList.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { gitWorkShop } from "../services/workshopsApi";

interface Workshop {
  _id: string;
  title: string;
  image: string;
  createdAt: string;
}

export default function WorkshopsList() {
  const navigate = useNavigate();
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const data = await gitWorkShop(); // استدعاء الدالة من الـ API
        setWorkshops(data.workshops);
      } catch (error) {
        console.error("حدث خطأ أثناء جلب الورش:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshops();
  }, []);

  if (loading) {
    return (
      <section className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">جاري تحميل الورش...</p>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 min-h-screen">
      <div className="container mx-auto px-6">
        {workshops?.length === 0 ? (
          <p className="text-center text-gray-500">لا توجد ورش حالياً.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {workshops.map((workshop, index) => (
              <div
                key={`${workshop._id}-${index}`} // لتفادي تكرار المفاتيح
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-400"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-3 line-clamp-1">
                    {workshop.title}
                  </h3>

                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <FaCalendarAlt className="ml-2" />
                    {new Date(workshop.createdAt).toLocaleDateString("ar-EG")}
                  </div>

                  <button
                    onClick={() => navigate(`/workshops/${workshop._id}`)}
                    className="w-full py-2 rounded-full bg-[#69596C] hover:bg-[#7a6a80] transition text-white font-medium"
                  >
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
