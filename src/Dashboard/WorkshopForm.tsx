// components/WorkshopForm.tsx
import { useState, useEffect } from "react";
import Label from "../components/ui/Label";
import Input from "../components/ui/Input/Input";
import { addWorkshop, updateWorkshop } from "../services/workshopsApi";

interface WorkshopData {
  _id?: string;
  title: string;
  price: number;
  seats: number;
  date: string; // تاريخ الورشة
  startTime: string; // وقت بدء الورشة
  endTime: string; // وقت انتهاء الورشة
  description: string;
  image?: string;
}

interface WorkshopFormProps {
  mode: "add" | "edit";
  initialData?: WorkshopData;
  onSubmit?: () => void; // اختياري لتنفيذ شيء بعد الإضافة
}

export default function WorkshopForm({
  mode,
  initialData,
  onSubmit,
}: WorkshopFormProps) {
  const [formData, setFormData] = useState<WorkshopData>({
    title: "",
    price: 0,
    seats: 0,
    date: "",
    startTime: "",
    endTime: "",
    description: "",
    image: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      if (initialData.image) setPreview(initialData.image);
    }
  }, [initialData]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formPayload = new FormData();
      formPayload.append("title", formData.title);
      formPayload.append("description", formData.description);
      formPayload.append("price", String(formData.price));
      formPayload.append("seats", String(formData.seats));
      formPayload.append("date", formData.date);
      formPayload.append("startTime", formData.startTime);
      formPayload.append("endTime", formData.endTime);
      if (imageFile) formPayload.append("image", imageFile);

      if (mode === "edit" && formData._id) {
        await updateWorkshop(formData._id, formPayload);
        alert("✅ تم تعديل الورشة بنجاح!");
      } else {
        await addWorkshop(formPayload);
        alert("✅ تمت إضافة الورشة بنجاح!");
      }
      if (onSubmit) onSubmit();
    } catch (err: any) {
      console.error("❌ حدث خطأ:", err);
      alert(err?.response?.data?.message || err.message || "حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {mode === "add" ? "إضافة ورشة جديدة" : "تعديل الورشة"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* العنوان والسعر */}
        <div className="flex items-center gap-2">
          <div className="w-1/2">
            <Label label="عنوان الورشة" />
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="اضف عنوان للورشة"
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
              placeholder="اضف سعر الورشة"
              required
            />
          </div>
        </div>

        {/* المقاعد، التاريخ، وقت البدء والانتهاء */}
        <div className="flex items-center gap-2">
          <div className="w-1/4">
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
          <div className="w-1/4">
            <Label label="تاريخ الورشة" />
            <Input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-1/4">
            <Label label="وقت البدء" />
            <Input
              name="startTime"
              type="time"
              value={formData.startTime}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-1/4">
            <Label label="وقت الانتهاء" />
            <Input
              name="endTime"
              type="time"
              value={formData.endTime}
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
              placeholder="اضف شرح يوصّف الورشة"
              required
            />
          </div>

          <div className="w-1/2 flex flex-col">
            <Label label="صورة الورشة" />
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

        {/* زر الإرسال */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-primary hover:bg-[#a58ae8] text-white font-medium rounded-lg transition-colors"
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
