import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal/Modal";

interface Workshop {
  _id: string;
  title: string;
  description: string;
  price: number;
  seats: number;
  createdAt: string;
}

interface Pagination {
  page: number;
  totalPages: number;
  total: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

const fetchFakeWorkshops = (page: number) => {
  const allWorkshops: Workshop[] = Array.from({ length: 20 }, (_, i) => ({
    _id: (i + 1).toString(),
    title: `ورشة رقم ${i + 1}`,
    description: `وصف الورشة رقم ${i + 1}`,
    price: (i + 1) * 10,
    seats: 20 + i,
    createdAt: new Date(2024, 9, i + 1).toISOString(),
  }));

  const perPage = 10;
  const start = (page - 1) * perPage;
  const paginatedWorkshops = allWorkshops.slice(start, start + perPage);

  const pagination: Pagination = {
    page,
    totalPages: Math.ceil(allWorkshops.length / perPage),
    total: allWorkshops.length,
    hasPrevPage: page > 1,
    hasNextPage: page < Math.ceil(allWorkshops.length / perPage),
  };

  return { workshops: paginatedWorkshops, pagination };
};

const WorkshopsTable: React.FC = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [modalType, setModalType] = useState<"view" | "delete" | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const response = fetchFakeWorkshops(currentPage);
    setWorkshops(response.workshops);
    setPagination(response.pagination);
    setLoading(false);
  }, [currentPage]);

  const handlePrev = () => {
    if (pagination?.hasPrevPage) setCurrentPage((p) => p - 1);
  };

  const handleNext = () => {
    if (pagination?.hasNextPage) setCurrentPage((p) => p + 1);
  };

  const handleView = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setModalType("view");
  };

  const handleEdit = (id: string) => navigate(`/dashboard/editworkshop/${id}`);

  const handleDelete = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setModalType("delete");
  };

  const confirmDelete = () => {
    alert(`تم حذف الورشة: ${selectedWorkshop?._id}`);
    setModalType(null);
  };

  if (loading) return <p className="p-6 text-gray-700">جاري تحميل البيانات...</p>;

  return (
    <div className="mt-8">
      {/* الجدول */}
      <table className="min-w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
        <thead className="bg-[#f3f2f7]">
          <tr>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">العنوان</th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">الوصف</th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">السعر</th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">عدد المقاعد</th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">تاريخ الإنشاء</th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">العمليات</th>
          </tr>
        </thead>
        <tbody>
          {workshops.map((workshop) => (
            <tr key={workshop._id} className="border-b last:border-none hover:bg-[#f9f8fc] transition-colors">
              <td className="py-3 px-6 text-gray-800 font-medium">{workshop.title}</td>
              <td className="py-3 px-6 text-gray-600">{workshop.description}</td>
              <td className="py-3 px-6 text-gray-800 font-medium">${workshop.price}</td>
              <td className="py-3 px-6 text-gray-800 font-medium">{workshop.seats}</td>
              <td className="py-3 px-6 text-gray-500 text-sm">
                {new Date(workshop.createdAt).toLocaleDateString("ar-EG")}
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

      {/* الباجنيشن */}
      {pagination && (
        <div className="flex justify-center gap-3 items-center mt-6 text-gray-700">
          <button
            onClick={handlePrev}
            disabled={!pagination.hasPrevPage}
            className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/85 disabled:opacity-50"
          >
            السابق
          </button>
          <span className="text-sm">
            صفحة {pagination.page} من {pagination.totalPages} — إجمالي: {pagination.total}
          </span>
          <button
            onClick={handleNext}
            disabled={!pagination.hasNextPage}
            className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/85 disabled:opacity-50"
          >
            التالي
          </button>
        </div>
      )}

      {/* مودال عرض التفاصيل */}
      <Modal
        title="تفاصيل الورشة"
        isOpen={modalType === "view"}
        onClose={() => setModalType(null)}
      >
        {selectedWorkshop && (
          <div className="space-y-2 text-gray-700">
            <p><strong>العنوان:</strong> {selectedWorkshop.title}</p>
            <p><strong>الوصف:</strong> {selectedWorkshop.description}</p>
            <p><strong>السعر:</strong> ${selectedWorkshop.price}</p>
            <p><strong>عدد المقاعد:</strong> {selectedWorkshop.seats}</p>
            <p><strong>تاريخ الإنشاء:</strong> {new Date(selectedWorkshop.createdAt).toLocaleDateString("ar-EG")}</p>
          </div>
        )}
      </Modal>

      {/* مودال تأكيد الحذف */}
      <Modal
        title="تأكيد الحذف"
        isOpen={modalType === "delete"}
        onClose={() => setModalType(null)}
      >
        <p className="text-gray-700 mb-4">
          هل أنت متأكد من حذف الورشة "<strong>{selectedWorkshop?.title}</strong>"؟
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
