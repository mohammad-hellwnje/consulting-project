import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiCalendar, BiCurrentLocation, BiTime, BiUser } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import StateBtn from "../../components/ui/Button/StateBtn";
import { getInPersonCourseById } from "../../services/inPersonCoursesApi";

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
  image: string;
  date: string;
  sessions: Session[];
  createdAt: string;
}

const dayOfWeekArabic: { [key: string]: string } = {
  Monday: "الاثنين",
  Tuesday: "الثلاثاء",
  Wednesday: "الأربعاء",
  Thursday: "الخميس",
  Friday: "الجمعة",
  Saturday: "السبت",
  Sunday: "الأحد",
};

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<InPersonCourse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) {
        setError("معرف الكورس غير موجود");
        setLoading(false);
        return;
      }

      try {
        const data = await getInPersonCourseById(id);
        setCourse(data);
      } catch (err) {
        console.error("❌ خطأ عند جلب الكورس:", err);
        setError("فشل تحميل بيانات الكورس");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <section className="pt-32 pb-10 padding-global bg-white min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">جاري تحميل البيانات...</p>
      </section>
    );
  }

  if (error || !course) {
    return (
      <section className="pt-32 pb-10 padding-global bg-white min-h-screen flex flex-col items-center justify-center">
        <p className="text-lg text-red-600 mb-4">
          {error || "فشل تحميل الكورس"}
        </p>
        <button
          onClick={() => navigate("/courses")}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-[#a58ae8] flex items-center gap-2"
        >
          <FaArrowRight />
          العودة للدورات
        </button>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-10 relative overflow-hidden padding-global bg-white">
      <img
        src="/public/assets/hero-image.svg"
        className="bottom-48 absolute w-98 -left-48 opacity-25"
        alt=""
      />

      {/* Back Button */}
      <button
        onClick={() => navigate("/courses")}
        className="mb-6 flex items-center gap-2 text-primary hover:text-[#a58ae8] transition"
      >
        <FaArrowRight size={18} />
        <span>العودة للدورات</span>
      </button>

      {/* Main Content */}
      <div className="mb-7 flex flex-col lg:flex-row-reverse gap-5">
        {/* Image Section */}
        <div className="h-[450px] w-full lg:w-2/3">
          <img
            src={`https://api.nafs-baserah.com/${course.image}`}
            alt={course.title}
            className="object-cover w-full h-full rounded-4xl"
          />
        </div>

        {/* Price Section */}
        <div className="flex bg-primary/10 rounded-3xl flex-col gap-5 items-center p-6 w-full lg:w-1/3 justify-center">
          <h2 className="text-2xl lg:text-4xl font-semibold">سعر الاشتراك</h2>
          <span className="text-4xl lg:text-6xl text-green-600 font-semibold">
            {course.price.toLocaleString("ar-EG")} ل.س
          </span>
          <StateBtn
            className="w-full lg:w-[200px] !text-lg lg:!text-2xl bg-primary text-white"
            text="احجزي الآن"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col items-start lg:flex-row-reverse gap-5 overflow-hidden">
        {/* Left Content */}
        <div className="w-full lg:w-2/3">
          <h2 className="my-5 text-2xl lg:text-4xl text-primary font-semibold">
            {course.title}
          </h2>

          {/* Course Info */}
          <div className="my-8 space-y-4">
            {/* Date */}
            <div className="mt-2.5 items-center flex gap-2.5">
              <div className="rounded-xl bg-primary/15 w-10 h-10 flex justify-center items-center flex-shrink-0">
                <BiCalendar size={20} />
              </div>
              <p className="text-gray-700">
                <strong>التاريخ:</strong>{" "}
                {new Date(course.date).toLocaleDateString("ar-EG")}
              </p>
            </div>

            {/* Seats */}
            <div className="mt-2.5 items-center flex gap-2.5">
              <div className="rounded-xl bg-primary/15 w-10 h-10 flex justify-center items-center flex-shrink-0">
                <BiUser size={20} />
              </div>
              <p className="text-gray-700">
                <strong>المقاعد المتاحة:</strong> {course.seats} مقعد
              </p>
            </div>

            {/* Duration */}
            <div className="mt-2.5 items-center flex gap-2.5">
              <div className="rounded-xl bg-primary/15 w-10 h-10 flex justify-center items-center flex-shrink-0">
                <BiTime size={20} />
              </div>
              <p className="text-gray-700">
                <strong>المدة:</strong> {course.duration} أشهر
              </p>
            </div>

            {/* Location */}
            <div className="mt-2.5 items-center flex gap-2.5">
              <div className="rounded-xl bg-primary/15 w-10 h-10 flex justify-center items-center flex-shrink-0">
                <BiCurrentLocation size={20} />
              </div>
              <p className="text-gray-700">
                <strong>الموقع:</strong> {course.location}
              </p>
            </div>
          </div>

          {/* Description */}
          <h2 className="mt-8 text-xl font-semibold text-gray-800">
            وصف الكورس
          </h2>
          <p className="mt-2.5 text-gray-700 leading-relaxed whitespace-pre-wrap">
            {course.description}
          </p>
        </div>

        {/* Right Sidebar - Sessions */}
        <div className="w-full lg:w-1/3">
          <div className="bg-primary/10 rounded-2xl p-6 sticky top-32">
            <h3 className="text-xl font-semibold text-primary mb-4">
              جدول الجلسات
            </h3>

            {course.sessions && course.sessions.length > 0 ? (
              <div className="space-y-3">
                {course.sessions.map((session, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-gray-200"
                  >
                    <p className="font-semibold text-gray-800 mb-2">
                      {dayOfWeekArabic[session.dayOfWeek] || session.dayOfWeek}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <BiTime size={16} />
                      <span>
                        {session.startTime} - {session.endTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">
                لا توجد جلسات محددة
              </p>
            )}

            <StateBtn
              className="w-full mt-6 !text-lg bg-primary text-white"
              text="احجزي مقعدك الآن"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
