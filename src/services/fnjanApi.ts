// services/fnjanApi.ts
import { api } from "./axios";

export async function getFnjanEvents() {
  const res = await api.get("/services/fnjan-qwa-events", { withCredentials: true });
  return res.data.data.events;
}

export async function addFnjanEvent(data: FormData) {
  const res = await api.post("/services/fnjan-qwa-events", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.events;
}

