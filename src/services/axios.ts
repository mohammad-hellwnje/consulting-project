// api/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.nafs-baserah.com/api/",
  withCredentials: true,
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }, // 👈 مهم عشان يرسل الكوكي مع كل طلب
});