// services/axios.ts
import axios from "axios";
import { getApiUrl } from "../config/environment";

export const api = axios.create({
  baseURL: getApiUrl(),
  withCredentials: true, // ✅ إرسال الكوكيز تلقائيًا
  headers: {
    Accept: "application/json",
  },
});
