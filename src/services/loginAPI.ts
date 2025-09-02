import { api } from "./axios";
import { config } from "../config/environment";

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
    accessToken?: string; // قد يكون موجود أو لا
  };
}

interface LoginData {
  email: string;
  password: string;
}

interface SignUpData
{
    fullName : string;
    email : string;
    password : string;
    confirmPassword : string;
    phoneNumber : string;
}
interface resetParams
{
    email : string;
}
export async function login(data: LoginData): Promise<LoginResponse> {
  const res = await api.post("/auth/login", data);

  // حفظ بيانات المستخدم في localStorage
  if (res.data.status === "success" && res.data.data?.user) {
    localStorage.setItem('currentUser', JSON.stringify(res.data.data.user));
  }

  return res.data;
}

export async function signUp(data: SignUpData) {
  const res = await api.post("/auth/register", data);
  return res.data;
}

export async function getCurrentUser(): Promise<User> {
  // أولاً، نحاول قراءة بيانات المستخدم من localStorage
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    try {
      const user = JSON.parse(savedUser);
      return user;
    } catch {
      localStorage.removeItem('currentUser');
    }
  }

  // إذا لم تكن هناك بيانات محفوظة، نحاول جلبها من الخادم
  const token = localStorage.getItem(config.token.storageKey);
  if (!token) {
    throw new Error('No access token found');
  }

  const res = await api.get("/auth/me");

  // التعامل مع بنية البيانات المختلفة
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

  // حفظ بيانات المستخدم في localStorage
  localStorage.setItem('currentUser', JSON.stringify(user));
  return user;
}

export async function logout() {
  const token = localStorage.getItem(config.token.storageKey);

  try {
    if (token) {
      await api.post("/auth/logout", {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  } catch {
    // تجاهل أخطاء الخادم عند تسجيل الخروج
  } finally {
    // مسح جميع البيانات من localStorage
    localStorage.removeItem(config.token.storageKey);
    localStorage.removeItem('currentUser');
  }
}
export async function resetPass(userData: resetParams) {
  const res = await api.post("/auth/forgot-password", userData);
  return res.data;
}

export async function resetPassword(data: {
  resetCode: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  const res = await api.post("/auth/reset-password", data);
  return res.data;
}
