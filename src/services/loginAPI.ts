import { LoginFormData } from "../schemas/fields";
const API_URL = 'http://localhost:5000/api';

// دالة تسجيل الدخول
export const login = async (data: LoginFormData) => {
  try {
    // استبدل هذا بـ API الفعلي
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('فشل في تسجيل الدخول');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('خطأ في تسجيل الدخول:', error);
    throw error;
  }
};
