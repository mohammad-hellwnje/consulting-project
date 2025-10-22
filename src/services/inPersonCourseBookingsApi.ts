// services/inPersonCourseBookingsApi.ts
import { api } from "./axios";

// TypeScript Interfaces
export interface InPersonCourseBooking {
  _id: string;
  courseId: string;
  userId: string;
  status: "pending" | "confirmed" | "rejected" | "cancelled";
  receipt?: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    _id: string;
    fullName: string;
    email: string;
    phoneNumber?: string;
  };
  course?: {
    _id: string;
    title: string;
    date: string;
    startTime: string;
    endTime: string;
  };
}

export interface InPersonCourseBookingResponse {
  _id: string;
  courseId: string;
  userId: string;
  status: "pending" | "confirmed" | "rejected" | "cancelled";
  receipt?: string;
  createdAt: string;
  updatedAt: string;
}

// ============================================
// ADMIN-FACING APIs
// ============================================

/**
 * Get all in-person course bookings
 * GET /api/services/in-person-course-bookings
 */
export async function getAllInPersonCourseBookings() {
  const res = await api.get("/services/in-person-course-bookings", {
    withCredentials: true,
  });
  console.log("res: ", res.data.data);
  return res.data.data;
}

/**
 * Get bookings for a specific in-person course
 * GET /api/services/in-person-course-bookings/course/{courseId}
 */
export async function getInPersonCourseBookings(courseId: string) {
  const res = await api.get(
    `/services/in-person-course-bookings/course/${courseId}`,
    { withCredentials: true }
  );
  return res.data.data;
}

/**
 * Confirm an in-person course booking (admin only)
 * PATCH /api/services/in-person-course-bookings/{bookingId}/confirm
 */
export async function confirmInPersonCourseBooking(bookingId: string) {
  const res = await api.patch(
    `/services/in-person-course-bookings/${bookingId}/confirm`,
    {},
    { withCredentials: true }
  );
  return res.data.data.booking;
}

/**
 * Reject an in-person course booking (admin only)
 * PATCH /api/services/in-person-course-bookings/{bookingId}/reject
 */
export async function rejectInPersonCourseBooking(bookingId: string) {
  const res = await api.patch(
    `/services/in-person-course-bookings/${bookingId}/reject`,
    {},
    { withCredentials: true }
  );
  return res.data.data.booking;
}

