import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowRight, FaCheck, FaTimes } from "react-icons/fa";
import Modal from "../components/Modal/Modal";
import {
  getFnjanEventBookings,
  confirmFnjanEventBooking,
  rejectFnjanEventBooking,
  FnjanEventBooking,
} from "../services/fnjanEventBookingsApi";
import { getFnjanEventById } from "../services/fnjanApi";

interface FnjanEvent {
  _id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
}

const FnjanEventSpecificBookingsTable: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<FnjanEventBooking[]>([]);
  const [event, setEvent] = useState<FnjanEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<FnjanEventBooking | null>(
    null
  );
  const [modalType, setModalType] = useState<
    "view" | "confirm" | "reject" | null
  >(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState<
    "all" | "pending" | "confirmed" | "rejected" | "cancelled"
  >("all");

  const fetchData = async () => {
    if (!eventId) return;
    setLoading(true);
    try {
      const [bookingsData, eventData] = await Promise.all([
        getFnjanEventBookings(eventId),
        getFnjanEventById(eventId),
      ]);
      setBookings(bookingsData.bookings || []);
      setEvent(eventData);
    } catch (err) {
      console.error("❌ خطأ عند جلب البيانات:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [eventId]);

  const handleConfirm = (booking: FnjanEventBooking) => {
    setSelectedBooking(booking);
    setModalType("confirm");
  };

  const handleReject = (booking: FnjanEventBooking) => {
    setSelectedBooking(booking);
    setModalType("reject");
  };

  const handleView = (booking: FnjanEventBooking) => {
    setSelectedBooking(booking);
    setModalType("view");
  };

  const confirmAction = async () => {
    if (!selectedBooking?._id) return;
    setActionLoading(true);

    try {
      if (modalType === "confirm") {
        await confirmFnjanEventBooking(selectedBooking._id);
        alert("✅ تم تأكيد الحجز بنجاح!");
      } else if (modalType === "reject") {
        await rejectFnjanEventBooking(selectedBooking._id);
        alert("✅ تم رفض الحجز!");
      }
      setModalType(null);
      fetchData();
    } catch (err: any) {
      console.error("❌ خطأ:", err);
      alert(err?.response?.data?.message || "حدث خطأ أثناء العملية");
    } finally {
      setActionLoading(false);
    }
  };

  const filteredBookings =
    filterStatus === "all"
      ? bookings
      : bookings.filter((b) => b.status === filterStatus);

  const getStatusBadge = (status: string) => {
    const statusMap: {
      [key: string]: { bg: string; text: string; label: string };
    } = {
      pending: { bg: "bg-yellow-100", text: "text-yellow-800", label: "قيد الانتظار" },
      confirmed: { bg: "bg-green-100", text: "text-green-800", label: "مؤكد" },
      rejected: { bg: "bg-red-100", text: "text-red-800", label: "مرفوض" },
      cancelled: { bg: "bg-gray-100", text: "text-gray-800", label: "ملغى" },
    };
    const s = statusMap[status] || statusMap.pending;
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${s.bg} ${s.text}`}>
        {s.label}
      </span>
    );
  };

  if (loading)
    return <p className="p-6 text-gray-700">جاري تحميل البيانات...</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Back Button */}
      <button
        onClick={() => navigate("/dashboard/fnjanAdmin")}
        className="mb-6 flex items-center gap-2 text-primary hover:text-[#a58ae8] transition"
      >
        <FaArrowRight size={18} />
        <span>العودة للفعاليات</span>
      </button>

      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        حجوزات الفعالية: {event?.title}
      </h2>
      <p className="text-gray-600 mb-6">
        {event?.date && new Date(event.date).toLocaleDateString("ar-EG")} |{" "}
        {event?.startTime} - {event?.endTime}
      </p>

      {/* Filter */}
      <div className="mb-6 flex gap-2 flex-wrap">
        {(["all", "pending", "confirmed", "rejected", "cancelled"] as const).map(
          (status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filterStatus === status
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {status === "all"
                ? "الكل"
                : status === "pending"
                ? "قيد الانتظار"
                : status === "confirmed"
                ? "مؤكد"
                : status === "rejected"
                ? "مرفوض"
                : "ملغى"}
            </button>
          )
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-300">
              <th className="py-3 px-6 text-right font-semibold text-gray-800">
                اسم المستخدم
              </th>
              <th className="py-3 px-6 text-right font-semibold text-gray-800">
                البريد الإلكتروني
              </th>
              <th className="py-3 px-6 text-right font-semibold text-gray-800">
                الهاتف
              </th>
              <th className="py-3 px-6 text-right font-semibold text-gray-800">
                الحالة
              </th>
              <th className="py-3 px-6 text-right font-semibold text-gray-800">
                الإيصال
              </th>
              <th className="py-3 px-6 text-right font-semibold text-gray-800">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-6 text-center text-gray-500">
                  لا توجد حجوزات
                </td>
              </tr>
            ) : (
              filteredBookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-6 text-gray-800">
                    {booking.user?.fullName || "-"}
                  </td>
                  <td className="py-3 px-6 text-gray-600 text-sm">
                    {booking.user?.email || "-"}
                  </td>
                  <td className="py-3 px-6 text-gray-600 text-sm">
                    {booking.user?.phoneNumber || "-"}
                  </td>
                  <td className="py-3 px-6">{getStatusBadge(booking.status)}</td>
                  <td className="py-3 px-6 text-center">
                    {booking.receipt ? (
                      <a
                        href={`https://api.nafs-baserah.com/${booking.receipt}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 font-semibold hover:underline"
                      >
                        ✅ عرض
                      </a>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-3 px-6">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleView(booking)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                      >
                        عرض
                      </button>
                      {booking.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleConfirm(booking)}
                            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm flex items-center gap-1"
                          >
                            <FaCheck size={12} />
                            تأكيد
                          </button>
                          <button
                            onClick={() => handleReject(booking)}
                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm flex items-center gap-1"
                          >
                            <FaTimes size={12} />
                            رفض
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      <Modal
        title="تفاصيل الحجز"
        isOpen={modalType === "view"}
        onClose={() => setModalType(null)}
      >
        {selectedBooking && (
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>المستخدم:</strong> {selectedBooking.user?.fullName}
            </p>
            <p>
              <strong>البريد:</strong> {selectedBooking.user?.email}
            </p>
            <p>
              <strong>الهاتف:</strong> {selectedBooking.user?.phoneNumber || "-"}
            </p>
            <p>
              <strong>الحالة:</strong> {getStatusBadge(selectedBooking.status)}
            </p>
            <p>
              <strong>تاريخ الحجز:</strong>{" "}
              {new Date(selectedBooking.createdAt).toLocaleDateString("ar-EG")}
            </p>
            {selectedBooking.receipt && (
              <p>
                <strong>الإيصال:</strong>{" "}
                <a
                  href={`https://api.nafs-baserah.com/${selectedBooking.receipt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  عرض الإيصال
                </a>
              </p>
            )}
          </div>
        )}
      </Modal>

      {/* Confirm Modal */}
      <Modal
        title="تأكيد الحجز"
        isOpen={modalType === "confirm"}
        onClose={() => setModalType(null)}
      >
        <p className="text-gray-700 mb-4">
          هل أنت متأكد من تأكيد حجز <strong>{selectedBooking?.user?.fullName}</strong>
          ؟
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setModalType(null)}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            إلغاء
          </button>
          <button
            onClick={confirmAction}
            disabled={actionLoading}
            className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
          >
            {actionLoading ? "جاري..." : "تأكيد"}
          </button>
        </div>
      </Modal>

      {/* Reject Modal */}
      <Modal
        title="رفض الحجز"
        isOpen={modalType === "reject"}
        onClose={() => setModalType(null)}
      >
        <p className="text-gray-700 mb-4">
          هل أنت متأكد من رفض حجز <strong>{selectedBooking?.user?.fullName}</strong>
          ؟
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setModalType(null)}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            إلغاء
          </button>
          <button
            onClick={confirmAction}
            disabled={actionLoading}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
          >
            {actionLoading ? "جاري..." : "رفض"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FnjanEventSpecificBookingsTable;

