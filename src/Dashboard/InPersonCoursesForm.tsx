// components/InPersonCoursesForm.tsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Label from "../components/ui/Label";
import Input from "../components/ui/Input/Input";
import {
  createInPersonCourse,
  updateInPersonCourse,
  getInPersonCourseById,
} from "../services/inPersonCoursesApi";
import { FaTrash, FaPlus } from "react-icons/fa";

interface Session {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

interface InPersonCourseData {
  title: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  seats: number;
  date: string;
  sessions: Session[];
  image?: string;
}

interface InPersonCoursesFormProps {
  mode: "add" | "edit";
  initialData?: InPersonCourseData;
  onSubmit?: () => void;
}

export default function InPersonCoursesForm({
  mode,
  initialData,
  onSubmit,
}: InPersonCoursesFormProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<InPersonCourseData>({
    title: "",
    description: "",
    price: 0,
    duration: "",
    location: "",
    seats: 0,
    date: "",
    sessions: [],
    image: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetchingData, setFetchingData] = useState(mode === "edit");

  useEffect(() => {
    if (mode === "edit" && id) {
      const fetchCourse = async () => {
        try {
          const course = await getInPersonCourseById(id);
          setFormData({
            title: course.title || "",
            description: course.description || "",
            price: course.price || 0,
            duration: course.duration || "",
            location: course.location || "",
            seats: course.seats || 0,
            date: course.date || "",
            sessions: course.sessions || [],
            image: course.image || "",
          });
          if (course.image) setPreview(course.image);
        } catch (err) {
          console.error("❌ خطأ عند جلب بيانات الكورس:", err);
          alert("حدث خطأ عند تحميل بيانات الكورس");
        } finally {
          setFetchingData(false);
        }
      };
      fetchCourse();
    } else if (initialData) {
      setFormData(initialData);
      if (initialData.image) setPreview(initialData.image);
      setFetchingData(false);
    } else {
      setFetchingData(false);
    }
  }, [mode, id, initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleAddSession = () => {
    setFormData((prev) => ({
      ...prev,
      sessions: [
        ...prev.sessions,
        { dayOfWeek: "", startTime: "", endTime: "" },
      ],
    }));
  };

  const handleRemoveSession = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      sessions: prev.sessions.filter((_, i) => i !== index),
    }));
  };

  const handleSessionChange = (
    index: number,
    field: keyof Session,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      sessions: prev.sessions.map((session, i) =>
        i === index ? { ...session, [field]: value } : session
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formPayload = new FormData();
      formPayload.append("title", formData.title);
      formPayload.append("description", formData.description);
      formPayload.append("price", String(formData.price));
      formPayload.append("duration", formData.duration);
      formPayload.append("location", formData.location);
      formPayload.append("seats", String(formData.seats));
      formPayload.append("date", formData.date);

      // Append each session individually to FormData
      formData.sessions.forEach((session, index) => {
        formPayload.append(`sessions[${index}][dayOfWeek]`, session.dayOfWeek);
        formPayload.append(`sessions[${index}][startTime]`, session.startTime);
        formPayload.append(`sessions[${index}][endTime]`, session.endTime);
      });

      if (imageFile) formPayload.append("image", imageFile);

      if (mode === "add") {
        await createInPersonCourse(formPayload);
        alert("✅ تمت إضافة الكورس الحضوري بنجاح!");
      } else if (mode === "edit" && id) {
        await updateInPersonCourse(id, formPayload);
        alert("✅ تم تحديث الكورس الحضوري بنجاح!");
      }

      if (onSubmit) onSubmit();
      navigate("/dashboard/coursesAdmin");
    } catch (err: any) {
      console.error("❌ حدث خطأ أثناء الإضافة:", err);
      alert(err?.response?.data?.message || err.message || "حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  if (fetchingData)
    return <p className="p-6 text-gray-700">جاري تحميل البيانات...</p>;

  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {mode === "add" ? "إضافة كورس حضوري جديد" : "تعديل الكورس الحضوري"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* العنوان والسعر */}
        <div className="flex items-center gap-2">
          <div className="w-1/2">
            <Label label="عنوان الكورس" />
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="اضف عنوان للكورس"
              required
            />
          </div>
          <div className="w-1/2">
            <Label label="السعر" />
            <Input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="اضف سعر الكورس"
              required
            />
          </div>
        </div>

        {/* المدة والموقع */}
        <div className="flex items-center gap-2">
          <div className="w-1/2">
            <Label label="المدة (بالأشهر)" />
            <Input
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="مثال: 1 أو 2 أو 3"
              required
            />
          </div>
          <div className="w-1/2">
            <Label label="الموقع" />
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="اضف موقع الكورس"
              required
            />
          </div>
        </div>

        {/* عدد المقاعد والتاريخ */}
        <div className="flex items-center gap-2">
          <div className="w-1/2">
            <Label label="عدد المقاعد" />
            <Input
              name="seats"
              type="number"
              value={formData.seats}
              onChange={handleChange}
              placeholder="اضف عدد المقاعد"
              required
            />
          </div>
          <div className="w-1/2">
            <Label label="تاريخ بدء الكورس" />
            <Input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* الوصف والصورة */}
        <div className="flex flex-col h-full lg:flex-row justify-between gap-6">
          <div className="w-1/2">
            <Label label="الوصف" />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-md border p-3 resize-none"
              placeholder="اضف شرح يوصّف الكورس"
              required
            />
          </div>

          <div className="w-1/2 flex flex-col">
            <Label label="صورة الكورس" />
            <div className="border-2 h-[158px] flex flex-col items-center justify-center border-dashed rounded-lg p-4 text-center hover:border-[#b69cf0] transition-all bg-gray-50">
              {preview ? (
                <div className="relative w-full h-full">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImageFile(null);
                      setPreview(null);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
                  >
                    إزالة
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer bg-primary text-white px-4 py-2 rounded-md hover:bg-[#a58ae8] transition-colors">
                  اختر صورة
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>
        </div>

        {/* الجلسات */}
        <div className="flex flex-col gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <Label label="الجلسات" />
            <button
              type="button"
              onClick={handleAddSession}
              className="flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-md hover:bg-[#a58ae8] transition-colors text-sm"
            >
              <FaPlus size={14} />
              إضافة جلسة
            </button>
          </div>

          {formData.sessions.length === 0 ? (
            <p className="text-gray-500 text-sm">لم تتم إضافة أي جلسات بعد</p>
          ) : (
            <div className="space-y-3">
              {formData.sessions.map((session, index) => (
                <div
                  key={index}
                  className="flex items-end gap-2 p-3 bg-white rounded-lg border border-gray-200"
                >
                  <div className="flex-1">
                    <Label label="يوم الأسبوع" />
                    <select
                      value={session.dayOfWeek}
                      onChange={(e) =>
                        handleSessionChange(index, "dayOfWeek", e.target.value)
                      }
                      className="w-full rounded-md border p-2 text-sm"
                      required
                    >
                      <option value="">اختر يوم</option>
                      <option value="Monday">الاثنين</option>
                      <option value="Tuesday">الثلاثاء</option>
                      <option value="Wednesday">الأربعاء</option>
                      <option value="Thursday">الخميس</option>
                      <option value="Friday">الجمعة</option>
                      <option value="Saturday">السبت</option>
                      <option value="Sunday">الأحد</option>
                    </select>
                  </div>

                  <div className="flex-1">
                    <Label label="وقت البدء" />
                    <Input
                      type="time"
                      value={session.startTime}
                      onChange={(e) =>
                        handleSessionChange(index, "startTime", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="flex-1">
                    <Label label="وقت الانتهاء" />
                    <Input
                      type="time"
                      value={session.endTime}
                      onChange={(e) =>
                        handleSessionChange(index, "endTime", e.target.value)
                      }
                      required
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveSession(index)}
                    className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                    title="حذف الجلسة"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* زر الإرسال */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate("/dashboard/coursesAdmin")}
            className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg transition-colors"
          >
            إلغاء
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-primary hover:bg-[#a58ae8] text-white font-medium rounded-lg transition-colors disabled:opacity-50"
          >
            {loading
              ? "جاري الإضافة..."
              : mode === "add"
              ? "تأكيد الإضافة"
              : "تأكيد التعديل"}
          </button>
        </div>
      </form>
    </div>
  );
}
