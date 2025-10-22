import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiCalendar, BiCurrentLocation, BiTime, BiUser } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import StateBtn from "../../components/ui/Button/StateBtn";
import { getInPersonCourseById } from "../../services/inPersonCoursesApi";
import { getWorkshopById } from "../../services/workshopsApi";
import { getFnjanEventById } from "../../services/fnjanApi";
import {
  bookWorkshop,
  uploadReceipt,
  cancelBooking,
  WorkshopBooking,
} from "../../services/workshopBookingsApi";
import {
  bookFnjanEventAsProjectOwner,
  bookFnjanEventAsRegularUser,
  uploadFnjanReceipt,
  cancelFnjanBooking,
  FnjanEventBooking,
} from "../../services/fnjanEventBookingsApi";

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

interface Workshop {
  _id: string;
  title: string;
  description: string;
  price: number;
  seats: number;
  image: string;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
}

interface FnjanEvent {
  _id: string;
  title: string;
  description: string;
  price: number;
  seats: number;
  image: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
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
  const [workshop, setWorkshop] = useState<Workshop | null>(null);
  const [fnjanEvent, setFnjanEvent] = useState<FnjanEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [itemType, setItemType] = useState<
    "course" | "workshop" | "fnjan" | null
  >(null);
  const [booking, setBooking] = useState<
    WorkshopBooking | FnjanEventBooking | null
  >(null);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [uploadingReceipt, setUploadingReceipt] = useState(false);
  const [userType, setUserType] = useState<"regular" | "project_owner">(
    "regular"
  );
  const [projectLink, setProjectLink] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setError("معرف العنصر غير موجود");
        setLoading(false);
        return;
      }

      try {
        // Try to fetch as course first
        try {
          const courseData = await getInPersonCourseById(id);
          setCourse(courseData);
          setItemType("course");
          setLoading(false);
          return;
        } catch (courseErr) {
          // If course fails, try workshop
          try {
            const workshopData = await getWorkshopById(id);
            setWorkshop(workshopData);
            setItemType("workshop");
            setLoading(false);
            return;
          } catch (workshopErr) {
            // If workshop fails, try Fnjan event
            try {
              const fnjanData = await getFnjanEventById(id);
              setFnjanEvent(fnjanData);
              setItemType("fnjan");
              setLoading(false);
              return;
            } catch (fnjanErr) {
              throw new Error("فشل تحميل البيانات");
            }
          }
        }
      } catch (err) {
        console.error("❌ خطأ عند جلب البيانات:", err);
        setError("فشل تحميل البيانات");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleBookWorkshop = async () => {
    if (!workshop?._id) return;
    setBookingLoading(true);
    try {
      const newBooking = await bookWorkshop(workshop._id);
      setBooking(newBooking);
      alert("✅ تم الحجز بنجاح! يرجى تحميل إيصال الدفع.");
    } catch (err: any) {
      console.error("❌ خطأ عند الحجز:", err);
      alert(err?.response?.data?.message || "فشل الحجز. يرجى المحاولة لاحقاً.");
    } finally {
      setBookingLoading(false);
    }
  };

  const handleUploadReceipt = async () => {
    if (!booking?._id || !receiptFile) {
      alert("يرجى اختيار ملف الإيصال");
      return;
    }
    setUploadingReceipt(true);
    try {
      const updatedBooking = await uploadReceipt(booking._id, receiptFile);
      setBooking(updatedBooking);
      setReceiptFile(null);
      alert("✅ تم تحميل الإيصال بنجاح!");
    } catch (err: any) {
      console.error("❌ خطأ عند تحميل الإيصال:", err);
      alert(
        err?.response?.data?.message ||
          "فشل تحميل الإيصال. يرجى المحاولة لاحقاً."
      );
    } finally {
      setUploadingReceipt(false);
    }
  };

  const handleCancelBooking = async () => {
    if (!booking?._id) return;
    if (!window.confirm("هل أنت متأكد من إلغاء الحجز؟")) return;

    try {
      if (itemType === "fnjan") {
        await cancelFnjanBooking(booking._id);
      } else {
        await cancelBooking(booking._id);
      }
      setBooking(null);
      alert("✅ تم إلغاء الحجز بنجاح!");
    } catch (err: any) {
      console.error("❌ خطأ عند إلغاء الحجز:", err);
      alert(
        err?.response?.data?.message || "فشل إلغاء الحجز. يرجى المحاولة لاحقاً."
      );
    }
  };

  const handleBookFnjanEvent = async () => {
    if (!fnjanEvent?._id) return;
    setBookingLoading(true);
    try {
      let newBooking;
      if (userType === "project_owner") {
        if (!projectLink.trim()) {
          alert("يرجى إدخال رابط المشروع");
          setBookingLoading(false);
          return;
        }
        newBooking = await bookFnjanEventAsProjectOwner(
          fnjanEvent._id,
          projectLink
        );
      } else {
        newBooking = await bookFnjanEventAsRegularUser(fnjanEvent._id);
      }
      setBooking(newBooking);
      alert("✅ تم الحجز بنجاح! يرجى تحميل إيصال الدفع.");
    } catch (err: any) {
      console.error("❌ خطأ عند الحجز:", err);
      alert(err?.response?.data?.message || "فشل الحجز. يرجى المحاولة لاحقاً.");
    } finally {
      setBookingLoading(false);
    }
  };

  const handleUploadFnjanReceipt = async () => {
    if (!booking?._id || !receiptFile) {
      alert("يرجى اختيار ملف الإيصال");
      return;
    }
    setUploadingReceipt(true);
    try {
      const updatedBooking = await uploadFnjanReceipt(booking._id, receiptFile);
      setBooking(updatedBooking);
      setReceiptFile(null);
      alert("✅ تم تحميل الإيصال بنجاح!");
    } catch (err: any) {
      console.error("❌ خطأ عند تحميل الإيصال:", err);
      alert(
        err?.response?.data?.message ||
          "فشل تحميل الإيصال. يرجى المحاولة لاحقاً."
      );
    } finally {
      setUploadingReceipt(false);
    }
  };

  if (loading) {
    return (
      <section className="pt-32 pb-10 padding-global bg-white min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">جاري تحميل البيانات...</p>
      </section>
    );
  }

  if (error || (!course && !workshop && !fnjanEvent)) {
    return (
      <section className="pt-32 pb-10 padding-global bg-white min-h-screen flex flex-col items-center justify-center">
        <p className="text-lg text-red-600 mb-4">
          {error || "فشل تحميل البيانات"}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-[#a58ae8] flex items-center gap-2"
        >
          <FaArrowRight />
          العودة
        </button>
      </section>
    );
  }

  // Determine which item to display
  const item = course || workshop || fnjanEvent;
  const isWorkshop = !!workshop;
  const isCourse = !!course;
  const isFnjan = !!fnjanEvent;

  return (
    <section className="pt-32 pb-10 relative overflow-hidden padding-global bg-white">
      <img
        src="/public/assets/hero-image.svg"
        className="bottom-48 absolute w-98 -left-48 opacity-25"
        alt=""
      />

      {/* Back Button */}
      <button
        onClick={() => navigate(isWorkshop ? "/workshops" : "/courses")}
        className="mb-6 flex items-center gap-2 text-primary hover:text-[#a58ae8] transition"
      >
        <FaArrowRight size={18} />
        <span>العودة {isWorkshop ? "للورش" : "للدورات"}</span>
      </button>

      {/* Main Content */}
      <div className="mb-7 flex flex-col lg:flex-row-reverse gap-5">
        {/* Image Section */}
        <div className="h-[450px] w-full lg:w-2/3">
          <img
            src={`https://api.nafs-baserah.com/${item?.image}`}
            alt={item?.title}
            className="object-cover w-full h-full rounded-4xl"
          />
        </div>

        {/* Price Section */}
        <div className="flex bg-primary/10 rounded-3xl flex-col gap-5 items-center p-6 w-full lg:w-1/3 justify-center">
          <h2 className="text-2xl lg:text-4xl font-semibold">سعر الاشتراك</h2>
          <span className="text-4xl lg:text-6xl text-green-600 font-semibold">
            {item?.price.toLocaleString("ar-EG")} ل.س
          </span>

          {/* Booking Status and Actions */}
          {isWorkshop && (
            <div className="w-full space-y-2">
              {!booking ? (
                <button
                  onClick={handleBookWorkshop}
                  disabled={bookingLoading}
                  className="w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-[#a58ae8] disabled:opacity-50 disabled:cursor-not-allowed transition font-semibold"
                >
                  {bookingLoading ? "جاري الحجز..." : "احجزي الآن"}
                </button>
              ) : (
                <>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                    <p className="text-green-700 font-semibold">
                      ✅ تم الحجز بنجاح!
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      الحالة:{" "}
                      {booking.status === "pending"
                        ? "قيد الانتظار"
                        : booking.status === "confirmed"
                        ? "مؤكد"
                        : booking.status}
                    </p>
                  </div>

                  {booking.status === "pending" && !booking.receipt && (
                    <div className="border-2 border-dashed border-primary rounded-lg p-4">
                      <label className="block text-sm font-semibold mb-2">
                        تحميل إيصال الدفع:
                      </label>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) =>
                          setReceiptFile(e.target.files?.[0] || null)
                        }
                        className="w-full mb-2"
                      />
                      <button
                        onClick={handleUploadReceipt}
                        disabled={!receiptFile || uploadingReceipt}
                        className="w-full py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition text-sm"
                      >
                        {uploadingReceipt ? "جاري التحميل..." : "تحميل الإيصال"}
                      </button>
                    </div>
                  )}

                  {booking.receipt && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                      <p className="text-blue-700 text-sm">
                        ✅ تم تحميل الإيصال بنجاح
                      </p>
                    </div>
                  )}

                  <button
                    onClick={handleCancelBooking}
                    className="w-full py-2 px-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm"
                  >
                    إلغاء الحجز
                  </button>
                </>
              )}
            </div>
          )}

          {isFnjan && (
            <div className="w-full space-y-3">
              {!booking ? (
                <>
                  {/* User Type Selection */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold">
                      نوع المستخدم:
                    </label>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setUserType("regular");
                          setProjectLink("");
                        }}
                        className={`flex-1 py-2 px-3 rounded-lg font-semibold transition ${
                          userType === "regular"
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        مستخدم عادي
                      </button>
                      <button
                        onClick={() => setUserType("project_owner")}
                        className={`flex-1 py-2 px-3 rounded-lg font-semibold transition ${
                          userType === "project_owner"
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        صاحب مشروع
                      </button>
                    </div>
                  </div>

                  {/* Project Link Input (for project owners) */}
                  {userType === "project_owner" && (
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        رابط المشروع:
                      </label>
                      <input
                        type="url"
                        placeholder="https://example.com"
                        value={projectLink}
                        onChange={(e) => setProjectLink(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                  )}

                  {/* Book Button */}
                  <button
                    onClick={handleBookFnjanEvent}
                    disabled={bookingLoading}
                    className="w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-[#a58ae8] disabled:opacity-50 disabled:cursor-not-allowed transition font-semibold"
                  >
                    {bookingLoading ? "جاري الحجز..." : "احجزي الآن"}
                  </button>
                </>
              ) : (
                <>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                    <p className="text-green-700 font-semibold">
                      ✅ تم الحجز بنجاح!
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      الحالة:{" "}
                      {booking.status === "pending"
                        ? "قيد الانتظار"
                        : booking.status === "confirmed"
                        ? "مؤكد"
                        : booking.status}
                    </p>
                  </div>

                  {booking.status === "pending" && !booking.receipt && (
                    <div className="border-2 border-dashed border-primary rounded-lg p-4">
                      <label className="block text-sm font-semibold mb-2">
                        تحميل إيصال الدفع:
                      </label>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) =>
                          setReceiptFile(e.target.files?.[0] || null)
                        }
                        className="w-full mb-2"
                      />
                      <button
                        onClick={handleUploadFnjanReceipt}
                        disabled={!receiptFile || uploadingReceipt}
                        className="w-full py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition text-sm"
                      >
                        {uploadingReceipt ? "جاري التحميل..." : "تحميل الإيصال"}
                      </button>
                    </div>
                  )}

                  {booking.receipt && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                      <p className="text-blue-700 text-sm">
                        ✅ تم تحميل الإيصال بنجاح
                      </p>
                    </div>
                  )}

                  <button
                    onClick={handleCancelBooking}
                    className="w-full py-2 px-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm"
                  >
                    إلغاء الحجز
                  </button>
                </>
              )}
            </div>
          )}

          {isCourse && (
            <StateBtn
              className="w-full lg:w-[200px] !text-lg lg:!text-2xl bg-primary text-white"
              text="احجزي الآن"
            />
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col items-start lg:flex-row-reverse gap-5 overflow-hidden">
        {/* Left Content */}
        <div className="w-full lg:w-2/3">
          <h2 className="my-5 text-2xl lg:text-4xl text-primary font-semibold">
            {item?.title}
          </h2>

          {/* Info */}
          <div className="my-8 space-y-4">
            {/* Date */}
            <div className="mt-2.5 items-center flex gap-2.5">
              <div className="rounded-xl bg-primary/15 w-10 h-10 flex justify-center items-center flex-shrink-0">
                <BiCalendar size={20} />
              </div>
              <p className="text-gray-700">
                <strong>التاريخ:</strong>{" "}
                {new Date(item?.date || "").toLocaleDateString("ar-EG")}
              </p>
            </div>

            {/* Seats */}
            <div className="mt-2.5 items-center flex gap-2.5">
              <div className="rounded-xl bg-primary/15 w-10 h-10 flex justify-center items-center flex-shrink-0">
                <BiUser size={20} />
              </div>
              <p className="text-gray-700">
                <strong>المقاعد المتاحة:</strong> {item?.seats} مقعد
              </p>
            </div>

            {/* Duration or Time */}
            <div className="mt-2.5 items-center flex gap-2.5">
              <div className="rounded-xl bg-primary/15 w-10 h-10 flex justify-center items-center flex-shrink-0">
                <BiTime size={20} />
              </div>
              <p className="text-gray-700">
                {isCourse ? (
                  <>
                    <strong>المدة:</strong> {(course as any)?.duration} أشهر
                  </>
                ) : (
                  <>
                    <strong>الوقت:</strong> {(workshop as any)?.startTime} -{" "}
                    {(workshop as any)?.endTime}
                  </>
                )}
              </p>
            </div>

            {/* Location (only for courses) */}
            {isCourse && (
              <div className="mt-2.5 items-center flex gap-2.5">
                <div className="rounded-xl bg-primary/15 w-10 h-10 flex justify-center items-center flex-shrink-0">
                  <BiCurrentLocation size={20} />
                </div>
                <p className="text-gray-700">
                  <strong>الموقع:</strong> {(course as any)?.location}
                </p>
              </div>
            )}
          </div>

          {/* Description */}
          <h2 className="mt-8 text-xl font-semibold text-gray-800">
            {isCourse ? "وصف الكورس" : "وصف الورشة"}
          </h2>
          <p className="mt-2.5 text-gray-700 leading-relaxed whitespace-pre-wrap">
            {item?.description}
          </p>
        </div>

        {/* Right Sidebar - Sessions (only for courses) */}
        {isCourse && (
          <div className="w-full lg:w-1/3">
            <div className="bg-primary/10 rounded-2xl p-6 sticky top-32">
              <h3 className="text-xl font-semibold text-primary mb-4">
                جدول الجلسات
              </h3>

              {(course as any)?.sessions &&
              (course as any)?.sessions.length > 0 ? (
                <div className="space-y-3">
                  {(course as any)?.sessions.map(
                    (session: Session, index: number) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-4 border border-gray-200"
                      >
                        <p className="font-semibold text-gray-800 mb-2">
                          {dayOfWeekArabic[session.dayOfWeek] ||
                            session.dayOfWeek}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <BiTime size={16} />
                          <span>
                            {session.startTime} - {session.endTime}
                          </span>
                        </div>
                      </div>
                    )
                  )}
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
        )}
      </div>
    </section>
  );
}
