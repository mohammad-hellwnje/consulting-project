// services/fnjanEventBookingsApi.ts
import { api } from "./axios";

// TypeScript Interfaces
export interface FnjanEventBooking {
  _id: string;
  eventId: string;
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
  event?: {
    _id: string;
    title: string;
    date: string;
    startTime: string;
    endTime: string;
  };
}

export interface FnjanEventBookingResponse {
  _id: string;
  eventId: string;
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
 * Get all Fnjan event bookings
 * GET /api/services/fnjan-qwa-event-bookings
 */
export async function getAllFnjanEventBookings() {
  const res = await api.get("/services/fnjan-qwa-event-bookings", {
    withCredentials: true,
  });
  console.log("res: ", res.data.data);
  return res.data.data;
}

/**
 * Get bookings for a specific Fnjan event
 * GET /api/services/fnjan-qwa-event-bookings/event/{eventId}
 */
export async function getFnjanEventBookings(eventId: string) {
  const res = await api.get(
    `/services/fnjan-qwa-event-bookings/event/${eventId}`,
    { withCredentials: true }
  );
  return res.data.data;
}

/**
 * Confirm a Fnjan event booking (admin only)
 * PATCH /api/services/fnjan-qwa-event-bookings/{bookingId}/confirm
 */
export async function confirmFnjanEventBooking(bookingId: string) {
  const res = await api.patch(
    `/services/fnjan-qwa-event-bookings/${bookingId}/confirm`,
    {},
    { withCredentials: true }
  );
  return res.data.data.booking;
}

/**
 * Reject a Fnjan event booking (admin only)
 * PATCH /api/services/fnjan-qwa-event-bookings/{bookingId}/reject
 */
export async function rejectFnjanEventBooking(bookingId: string) {
  const res = await api.patch(
    `/services/fnjan-qwa-event-bookings/${bookingId}/reject`,
    {},
    { withCredentials: true }
  );
  return res.data.data.booking;
}

