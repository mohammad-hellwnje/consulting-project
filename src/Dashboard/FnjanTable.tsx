import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import { getFnjanEvents } from "../services/fnjanApi"; // استدعاء الدالة الجاهزة

interface FnjanEvent {
  _id: string;
  title: string;
  description: string;
  price: number;
  seats: number;
  date?: string;
  startTime?: string;
  endTime?: string;
  image?: string;
  createdAt: string;
}

const FnjanTable: React.FC = () => {
  const [events, setEvents] = useState<FnjanEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<FnjanEvent | null>(null);
  const [modalType, setModalType] = useState<"view" | "delete" | null>(null);

  const navigate = useNavigate();

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const data = await getFnjanEvents();
      // تأكد من وجود قيم فارغة للمفاتيح التي قد تكون غير موجودة
      const eventsWithDefaults = data.map((e: any) => ({
        ...e,
        date: e.date || "",
        startTime: e.startTime || "",
        endTime: e.endTime || "",
      }));
      setEvents(eventsWithDefaults);
    } catch (err) {
      console.error("❌ خطأ عند جلب أحداث الفنجان:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleView = (event: FnjanEvent) => { setSelectedEvent(event); setModalType("view"); };
  const handleEdit = (id: string) => navigate(`/dashboard/editfnjan/${id}`);
  const handleDelete = (event: FnjanEvent) => { setSelectedEvent(event); setModalType("delete"); };

  const confirmDelete = () => {
    alert(`تم حذف حدث الفنجان: ${selectedEvent?._id}`);
    setModalType(null);
  };

  if (loading) return <p className="p-6 text-gray-700">جاري تحميل البيانات...</p>;

  return (
    <div className="mt-8">
      <table className="min-w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
        <thead className="bg-[#f3f2f7]">
          <tr>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">العنوان</th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">الوصف</th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">السعر</th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">عدد المقاعد</th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">تاريخ الحدث</th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">الوقت</th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">العمليات</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event._id} className="border-b last:border-none hover:bg-[#f9f8fc] transition-colors">
              <td className="py-3 px-6 text-gray-800 font-medium">{event.title}</td>
              <td className="py-3 px-6 text-gray-600">{event.description}</td>
              <td className="py-3 px-6 text-gray-800 font-medium">${event.price}</td>
              <td className="py-3 px-6 text-gray-800 font-medium">{event.seats}</td>
              <td className="py-3 px-6 text-gray-500 text-sm">
                {event.date ? new Date(event.date).toLocaleDateString("ar-EG") : "-"}
              </td>
              <td className="py-3 px-6 text-gray-500 text-sm">
                {event.startTime && event.endTime ? `${event.startTime} - ${event.endTime}` : "-"}
              </td>
              <td className="py-3 px-6 text-center flex gap-3 justify-center">
                <button onClick={() => handleView(event)} className="text-blue-500 hover:text-blue-700" title="عرض"><FaEye /></button>
                <button onClick={() => handleEdit(event._id)} className="text-yellow-500 hover:text-yellow-700" title="تعديل"><FaEdit /></button>
                <button onClick={() => handleDelete(event)} className="text-red-500 hover:text-red-700" title="حذف"><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* مودال العرض */}
      <Modal title="تفاصيل حدث الفنجان" isOpen={modalType === "view"} onClose={() => setModalType(null)}>
        {selectedEvent && (
          <div className="space-y-2 text-gray-700">
            <p><strong>العنوان:</strong> {selectedEvent.title}</p>
            <p><strong>الوصف:</strong> {selectedEvent.description}</p>
            <p><strong>السعر:</strong> ${selectedEvent.price}</p>
            <p><strong>عدد المقاعد:</strong> {selectedEvent.seats}</p>
            <p><strong>التاريخ:</strong> {selectedEvent.date ? new Date(selectedEvent.date).toLocaleDateString("ar-EG") : "-"}</p>
            <p><strong>الوقت:</strong> {selectedEvent.startTime && selectedEvent.endTime ? `${selectedEvent.startTime} - ${selectedEvent.endTime}` : "-"}</p>
            {selectedEvent.image && <img src={`https://your-domain.com/${selectedEvent.image}`} alt={selectedEvent.title} className="w-32 h-20 object-cover mt-2 rounded-md"/>}
          </div>
        )}
      </Modal>

      {/* مودال الحذف */}
      <Modal title="تأكيد الحذف" isOpen={modalType === "delete"} onClose={() => setModalType(null)}>
        <p className="text-gray-700 mb-4">هل أنت متأكد من حذف حدث الفنجان "<strong>{selectedEvent?.title}</strong>"؟</p>
        <div className="flex justify-end gap-3">
          <button onClick={() => setModalType(null)} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">لا</button>
          <button onClick={confirmDelete} className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">نعم، احذف</button>
        </div>
      </Modal>
    </div>
  );
};

export default FnjanTable;

