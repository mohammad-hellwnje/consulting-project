import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import {
  getInPersonCourses,
  deleteInPersonCourse,
} from "../services/inPersonCoursesApi";

interface Session {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

interface InPersonCourse {
  _id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  seats: number;
  date?: string;
  sessions?: Session[];
  image?: string;
  createdAt: string;
}

const InPersonCoursesTable: React.FC = () => {
  const [courses, setCourses] = useState<InPersonCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<InPersonCourse | null>(
    null
  );
  const [modalType, setModalType] = useState<"view" | "delete" | null>(null);
  const [deleting, setDeleting] = useState(false);

  const navigate = useNavigate();

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const data = await getInPersonCourses();
      // تأكد من وجود قيم فارغة للمفاتيح التي قد تكون غير موجودة
      const coursesWithDefaults = data.map((c: InPersonCourse) => ({
        ...c,
        date: c.date || "",
        duration: c.duration || "",
        location: c.location || "",
        sessions: c.sessions || [],
      }));
      setCourses(coursesWithDefaults);
    } catch (err) {
      console.error("❌ خطأ عند جلب الكورسات الحضورية:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleView = (course: InPersonCourse) => {
    setSelectedCourse(course);
    setModalType("view");
  };

  const handleEdit = (id: string) =>
    navigate(`/dashboard/editinpersoncourse/${id}`);

  const handleDelete = (course: InPersonCourse) => {
    setSelectedCourse(course);
    setModalType("delete");
  };

  const confirmDelete = async () => {
    if (!selectedCourse) return;
    setDeleting(true);
    try {
      await deleteInPersonCourse(selectedCourse._id);
      alert(`✅ تم حذف الكورس الحضوري: ${selectedCourse.title}`);
      setCourses(courses.filter((c) => c._id !== selectedCourse._id));
      setModalType(null);
    } catch (err: any) {
      console.error("❌ خطأ عند حذف الكورس:", err);
      alert(err?.response?.data?.message || "حدث خطأ أثناء الحذف");
    } finally {
      setDeleting(false);
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
              السعر
            </th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">
              المدة
            </th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">
              الموقع
            </th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">
              عدد المقاعد
            </th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">
              تاريخ البدء
            </th>
            <th className="py-3 px-6 text-right text-gray-700 font-semibold">
              العمليات
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr
              key={course._id}
              className="border-b last:border-none hover:bg-[#f9f8fc] transition-colors"
            >
              <td className="py-3 px-6 text-gray-800 font-medium">
                {course.title}
              </td>
              <td className="py-3 px-6 text-gray-800 font-medium">
                {course.price}{" "}ل.س
              </td>
              <td className="py-3 px-6 text-gray-600">{course.duration} شهر</td>
              <td className="py-3 px-6 text-gray-600">{course.location}</td>
              <td className="py-3 px-6 text-gray-800 font-medium">
                {course.seats}
              </td>
              <td className="py-3 px-6 text-gray-500 text-sm">
                {course.date
                  ? new Date(course.date).toLocaleDateString("ar-EG")
                  : "-"}
              </td>
              <td className="py-3 px-6 text-center flex gap-3 justify-center">
                <button
                  onClick={() => handleView(course)}
                  className="text-blue-500 hover:text-blue-700"
                  title="عرض"
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => handleEdit(course._id)}
                  className="text-yellow-500 hover:text-yellow-700"
                  title="تعديل"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(course)}
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
        title="تفاصيل الكورس الحضوري"
        isOpen={modalType === "view"}
        onClose={() => setModalType(null)}
      >
        {selectedCourse && (
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>العنوان:</strong> {selectedCourse.title}
            </p>
            <p>
              <strong>الوصف:</strong> {selectedCourse.description}
            </p>
            <p>
              <strong>السعر:</strong> ${selectedCourse.price}
            </p>
            <p>
              <strong>المدة:</strong> {selectedCourse.duration} شهر
            </p>
            <p>
              <strong>الموقع:</strong> {selectedCourse.location}
            </p>
            <p>
              <strong>عدد المقاعد:</strong> {selectedCourse.seats}
            </p>
            <p>
              <strong>تاريخ البدء:</strong>{" "}
              {selectedCourse.date
                ? new Date(selectedCourse.date).toLocaleDateString("ar-EG")
                : "-"}
            </p>
            {selectedCourse.sessions && selectedCourse.sessions.length > 0 && (
              <div>
                <strong>الجلسات:</strong>
                <ul className="mt-2 space-y-1 text-sm">
                  {selectedCourse.sessions.map((session, idx) => (
                    <li key={idx} className="text-gray-600">
                      {session.dayOfWeek}: {session.startTime} -{" "}
                      {session.endTime}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedCourse.image && (
              <img
                src={`https://api.nafs-baserah.com/${selectedCourse.image}`}
                alt={selectedCourse.title}
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
          هل أنت متأكد من حذف الكورس الحضوري "
          <strong>{selectedCourse?.title}</strong>"؟
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setModalType(null)}
            disabled={deleting}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            لا
          </button>
          <button
            onClick={confirmDelete}
            disabled={deleting}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
          >
            {deleting ? "جاري الحذف..." : "نعم، احذف"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default InPersonCoursesTable;
