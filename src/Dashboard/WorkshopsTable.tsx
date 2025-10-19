import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import { gitWorkShop, deleteWorkshop } from "../services/workshopsApi"; // استدعاء الدالة الجاهزة

interface Workshop {
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

const WorkshopsTable: React.FC = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(
    null
  );
  const [modalType, setModalType] = useState<"view" | "delete" | null>(null);

  const navigate = useNavigate();

  const fetchWorkshops = async () => {
    setLoading(true);
    try {
      const data = await gitWorkShop();
      // تأكد من وجود قيم فارغة للمفاتيح التي قد تكون غير موجودة
      const workshopsWithDefaults = data.map((w: any) => ({
        ...w,
        date: w.date || "",
        startTime: w.startTime || "",
        endTime: w.endTime || "",
      }));
      setWorkshops(workshopsWithDefaults);
    } catch (err) {
      console.error("❌ خطأ عند جلب الورشات:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const handleView = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setModalType("view");
  };
  const handleEdit = (id: string) => navigate(`/dashboard/editworkshop/${id}`);
  const handleDelete = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setModalType("delete");
  };

  const confirmDelete = async () => {
    if (!selectedWorkshop?._id) return;

    try {
      await deleteWorkshop(selectedWorkshop._id);
      alert("✅ تم حذف الورشة بنجاح!");
      setModalType(null);
      // Refresh the workshops list
      fetchWorkshops();
    } catch (err) {
      console.error("❌ خطأ عند حذف الورشة:", err);
      alert("❌ حدث خطأ أثناء حذف الورشة");
    }
  };

  if (loading)
    return <p className="p-6 text-gray-700">جاري تحميل البيانات...</p>;

  return (
    <div className="mt-8">
      <table className="min-w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
        <thead className="bg-[#f3f2f7]">
          <tr>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">
              العنوان
            </th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">
              الوصف
            </th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">
              السعر
            </th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">
              عدد المقاعد
            </th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">
              تاريخ الورشة
            </th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">
              الوقت
            </th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">
              العمليات
            </th>
          </tr>
        </thead>
        <tbody>
          {workshops.map((workshop) => (
            <tr
              key={workshop._id}
              className="border-b last:border-none hover:bg-[#f9f8fc] transition-colors"
            >
              <td className="py-3 px-6 text-gray-800 font-medium">
                {workshop.title}
              </td>
              <td className="py-3 px-6 text-gray-600">
                {workshop.description}
              </td>
              <td className="py-3 px-6 text-gray-800 font-medium">
                ${workshop.price}
              </td>
              <td className="py-3 px-6 text-gray-800 font-medium">
                {workshop.seats}
              </td>
              <td className="py-3 px-6 text-gray-500 text-sm">
                {workshop.date
                  ? new Date(workshop.date).toLocaleDateString("ar-EG")
                  : "-"}
              </td>
              <td className="py-3 px-6 text-gray-500 text-sm">
                {workshop.startTime && workshop.endTime
                  ? `${workshop.startTime} - ${workshop.endTime}`
                  : "-"}
              </td>
              <td className="py-3 px-6 text-center flex gap-3 justify-center">
                <button
                  onClick={() => handleView(workshop)}
                  className="text-blue-500 hover:text-blue-700"
                  title="عرض"
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => handleEdit(workshop._id)}
                  className="text-yellow-500 hover:text-yellow-700"
                  title="تعديل"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(workshop)}
                  className="text-red-500 hover:text-red-700"
                  title="حذف"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* مودال العرض */}
      <Modal
        title="تفاصيل الورشة"
        isOpen={modalType === "view"}
        onClose={() => setModalType(null)}
      >
        {selectedWorkshop && (
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>العنوان:</strong> {selectedWorkshop.title}
            </p>
            <p>
              <strong>الوصف:</strong> {selectedWorkshop.description}
            </p>
            <p>
              <strong>السعر:</strong> ${selectedWorkshop.price}
            </p>
            <p>
              <strong>عدد المقاعد:</strong> {selectedWorkshop.seats}
            </p>
            <p>
              <strong>التاريخ:</strong>{" "}
              {selectedWorkshop.date
                ? new Date(selectedWorkshop.date).toLocaleDateString("ar-EG")
                : "-"}
            </p>
            <p>
              <strong>الوقت:</strong>{" "}
              {selectedWorkshop.startTime && selectedWorkshop.endTime
                ? `${selectedWorkshop.startTime} - ${selectedWorkshop.endTime}`
                : "-"}
            </p>
            {selectedWorkshop.image && (
              <img
                src={`https://api.nafs-baserah.com/${selectedWorkshop.image}`}
                alt={selectedWorkshop.title}
                className="w-full object-cover mt-2 rounded-md"
              />
            )}
          </div>
        )}
      </Modal>

      {/* مودال الحذف */}
      <Modal
        title="تأكيد الحذف"
        isOpen={modalType === "delete"}
        onClose={() => setModalType(null)}
      >
        <p className="text-gray-700 mb-4">
          هل أنت متأكد من حذف الورشة "<strong>{selectedWorkshop?.title}</strong>
          "؟
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setModalType(null)}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            لا
          </button>
          <button
            onClick={confirmDelete}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            نعم، احذف
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default WorkshopsTable;
