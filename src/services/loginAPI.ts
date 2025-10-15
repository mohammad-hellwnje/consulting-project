import { api } from "./axios";

interface User {
  _id: string;
  fullName: string;
  email: string;
  role: 'user' | 'admin';
}

interface LoginResponse {
  status: string;
  message: string;
  data: {
    user: User;
  };
}

interface LoginData {
  email: string;
  password: string;
}

interface SignUpData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

interface ResetParams {
  email: string;
}

// تسجيل الدخول
export async function login(data: LoginData): Promise<LoginResponse> {
  const res = await api.post("/auth/login", data, { withCredentials: true });

  // حفظ بيانات المستخدم فقط (لا توكن)
  if (res.data.status === "success" && res.data.data?.user) {
    localStorage.setItem('currentUser', JSON.stringify(res.data.data.user));
  }

  return res.data;
}

// التسجيل
export async function signUp(data: SignUpData) {
  const res = await api.post("/auth/register", data, { withCredentials: true });
  return res.data;
}

// جلب بيانات المستخدم الحالية
export async function getCurrentUser(): Promise<User> {
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    try {
      return JSON.parse(savedUser);
    } catch {
      localStorage.removeItem('currentUser');
    }
  }

  // جلب المستخدم من السيرفر عبر الكوكيز
  const res = await api.get("/auth/me", { withCredentials: true });

  let user: User;
  if (res.data.user) {
    user = res.data.user;
  } else if (res.data.data?.user) {
    user = res.data.data.user;
  } else if (res.data._id) {
    user = res.data;
  } else {
    throw new Error('User data not found in response');
  }

  localStorage.setItem('currentUser', JSON.stringify(user));
  return user;
}

// تسجيل الخروج
export async function logout() {
  try {
    await api.post("/auth/logout", {}, { withCredentials: true });
  } catch {
    // تجاهل الأخطاء
  } finally {
    localStorage.removeItem('currentUser');
  }
}

// إعادة تعيين كلمة المرور
export async function resetPass(userData: ResetParams) {
  const res = await api.post("/auth/forgot-password", userData, { withCredentials: true });
  return res.data;
}

export async function resetPassword(data: {
  resetCode: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  const res = await api.post("/auth/reset-password", data, { withCredentials: true });
  return res.data;
}
