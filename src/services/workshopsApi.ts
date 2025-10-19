// services/workshopsApi.ts
import { api } from "./axios";

// Get all workshops
export async function gitWorkShop() {
  const res = await api.get("/services/workshops", { withCredentials: true });
  return res.data.data.workshops;
}

// Get workshop by id
export async function getWorkshopById(id: string) {
  const res = await api.get(`/services/workshops/${id}`, {
    withCredentials: true,
  });
  return res.data.data.workshop;
}

// Create workshop
export async function addWorkshop(data: FormData) {
  const res = await api.post("/services/workshops", data, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
  return res.data.data.workshop;
}

// Update workshop
export async function updateWorkshop(id: string, data: FormData) {
  const res = await api.put(`/services/workshops/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
  return res.data.data.workshop;
}

// Delete workshop
export async function deleteWorkshop(id: string) {
  const res = await api.delete(`/services/workshops/${id}`, {
    withCredentials: true,
  });
  return res.data;
}
