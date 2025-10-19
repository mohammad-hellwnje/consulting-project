// services/fnjanApi.ts
import { api } from "./axios";

// Get all Fnjan events
export async function getFnjanEvents() {
  const res = await api.get("/services/fnjan-qwa-events", {
    withCredentials: true,
  });
  return res.data.data.events;
}

// Get Fnjan event by id
export async function getFnjanEventById(id: string) {
  const res = await api.get(`/services/fnjan-qwa-events/${id}`, {
    withCredentials: true,
  });
  return res.data.data.event;
}

// Create Fnjan event
export async function addFnjanEvent(data: FormData) {
  const res = await api.post("/services/fnjan-qwa-events", data, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
  return res.data.data.event;
}

// Update Fnjan event
export async function updateFnjanEvent(id: string, data: FormData) {
  const res = await api.put(`/services/fnjan-qwa-events/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
  return res.data.data.event;
}

// Delete Fnjan event
export async function deleteFnjanEvent(id: string) {
  const res = await api.delete(`/services/fnjan-qwa-events/${id}`, {
    withCredentials: true,
  });
  return res.data;
}
