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

// 🎯 Interceptor للردود — لتجديد التوكن تلقائيًا عند انتهاء صلاحية accessToken
api.interceptors.response.use(
  (response) => response, // كل شيء تمام
  async (error) => {
    const originalRequest = error.config;

    // إذا كان الخطأ بسبب انتهاء التوكن ولم نجرب التجديد بعد
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // طلب لتجديد accessToken باستخدام refreshToken (الذي موجود في الكوكيز)
        await api.post("/auth/refresh-token");

        // إعادة إرسال الريكويست الأصلي بعد نجاح التجديد
        return api(originalRequest);
      } catch (refreshError) {
        console.error("❌ Token refresh failed:", refreshError);

        // في حال فشل التجديد، يمكننا مسح بيانات المستخدم وتوجيهه لتسجيل الدخول
        localStorage.removeItem("currentUser");
        window.location.href = "/login";
      }
    }

    // إذا كان الخطأ من نوع آخر
    return Promise.reject(error);
  }
);
