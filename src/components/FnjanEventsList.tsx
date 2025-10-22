// src/components/FnjanEventsList.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { getFnjanEvents } from "../services/fnjanApi";

interface FnjanEvent {
  _id: string;
  title: string;
  image: string;
  createdAt: string;
}

export default function FnjanEventsList() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<FnjanEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getFnjanEvents(); // استدعاء الدالة من الـ API
        setEvents(data);
      } catch (error) {
        console.error("حدث خطأ أثناء جلب فعاليات الفنجان:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">جاري تحميل الفعاليات...</p>
      </section>
    );
  }

  return (
    <section id="list" className="bg-white relative py-20 overflow-hidden min-h-screen">
      <img src="./assets/hero-image.svg" className="z-0 absolute w-3xs -bottom-28 -right-24" alt="" />
      <img src="./assets/hero-image.svg" className="z-0 absolute w-3xs -top-28 -left-24" alt="" />
      <div className="z-30 mx-auto px-6">
        {events?.length === 0 ? (
          <p className="text-center text-gray-500">لا توجد فعاليات حالياً.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events?.map((event, index) => (
              <div
                key={`${event._id}-${index}`} // لتفادي تكرار المفاتيح
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-400 z-1"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={`https://api.nafs-baserah.com/${event.image}`}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-3 line-clamp-1">
                    {event.title}
                  </h3>

                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FaCalendarAlt className="ml-2" />
                    {new Date(event.createdAt).toLocaleDateString("ar-EG")}
                  </div>

                  <button
                    onClick={() => navigate(`/servdetails/${event._id}`)}
                    className="w-full py-2 rounded-full bg-primary transition text-white font-medium"
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

