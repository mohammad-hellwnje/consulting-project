// api/axios.ts
import axios from "axios";
import { getApiUrl, config } from "../config/environment";

export const api = axios.create({
  baseURL: getApiUrl(),
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// إضافة interceptor للتوكن
api.interceptors.request.use(
  (requestConfig) => {
    const token = localStorage.getItem(config.token.storageKey);
    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`;
    }
    return requestConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// إضافة interceptor للاستجابة للتعامل مع انتهاء صلاحية التوكن
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // إذا كان التوكن منتهي الصلاحية، مسح التوكن وإعادة توجيه للتسجيل
      localStorage.removeItem(config.token.storageKey);
      localStorage.removeItem('currentUser');

      // تجنب إعادة التوجيه المتكررة
      if (!window.location.pathname.includes('/auth/')) {
        window.location.href = '/auth/login';
      }
    }

    return Promise.reject(error);
  }
);