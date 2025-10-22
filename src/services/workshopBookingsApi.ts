// services/workshopBookingsApi.ts
import { api } from "./axios";

// TypeScript Interfaces
export interface WorkshopBooking {
  _id: string;
  workshopId: string;
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
  workshop?: {
    _id: string;
    title: string;
    date: string;
    startTime: string;
    endTime: string;
  };
}

export interface BookingResponse {
  _id: string;
  workshopId: string;
  userId: string;
  status: "pending" | "confirmed" | "rejected" | "cancelled";
  receipt?: string;
  createdAt: string;
  updatedAt: string;
}

// ============================================
// USER-FACING APIs
// ============================================

/**
 * Book a workshop
 * POST /api/services/workshop-bookings
 */
export async function bookWorkshop(workshopId: string) {
  const res = await api.post(
    "/services/workshop-bookings",
    { workshopId },
    { withCredentials: true }
  );
  return res.data.data.booking;
}

/**
 * Upload receipt for a booking
 * PATCH /api/services/workshop-bookings/{bookingId}/upload-receipt
 */
export async function uploadReceipt(bookingId: string, receiptFile: File) {
  const formData = new FormData();
  formData.append("receipt", receiptFile);

  const res = await api.patch(
    `/services/workshop-bookings/${bookingId}/upload-receipt`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    }
  );
  return res.data.data.booking;
}

/**
 * Cancel a booking
 * PATCH /api/services/workshop-bookings/{bookingId}/cancel
 */
export async function cancelBooking(bookingId: string) {
  const res = await api.patch(
    `/services/workshop-bookings/${bookingId}/cancel`,
    {},
    { withCredentials: true }
  );
  return res.data.data.booking;
}

// ============================================
// ADMIN-FACING APIs
// ============================================

/**
 * Get all workshop bookings
 * GET /api/services/workshop-bookings
 */
export async function getAllWorkshopBookings() {
  const res = await api.get("/services/workshop-bookings", {
    withCredentials: true,
  });
  return res.data.data.bookings;
}

/**
 * Get bookings for a specific workshop
 * GET /api/services/workshop-bookings/workshop/{workshopId}
 */
export async function getWorkshopBookings(workshopId: string) {
  const res = await api.get(
    `/services/workshop-bookings/workshop/${workshopId}`,
    { withCredentials: true }
  );
  console.log("res: ", res.data.data)
  return res.data.data;
}

/**
 * Confirm a booking (admin only)
 * PATCH /api/services/workshop-bookings/{bookingId}/confirm
 */
export async function confirmBooking(bookingId: string) {
  const res = await api.patch(
    `/services/workshop-bookings/${bookingId}/confirm`,
    {},
    { withCredentials: true }
  );
  return res.data.data.booking;
}

/**
 * Reject a booking (admin only)
 * PATCH /api/services/workshop-bookings/{bookingId}/reject
 */
export async function rejectBooking(bookingId: string) {
  const res = await api.patch(
    `/services/workshop-bookings/${bookingId}/reject`,
    {},
    { withCredentials: true }
  );
  return res.data.data.booking;
}

