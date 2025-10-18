// services/workshopsApi.ts
import { api } from "./axios";

export async function gitWorkShop() {
  const res = await api.get("/services/workshops", { withCredentials: true });
  return res.data.data.workshops;
}

export async function addWorkshop(data: FormData) {
  const res = await api.post("/services/workshops", data, {
    headers: { "Content-Type": "multipart/form-data" },
    
  });
  return res.data.workshops;
}
