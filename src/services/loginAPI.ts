import { api } from "./axios";


interface LoginData {
  email: string;
  password: string;
}


export async function login(data: { email: string; password: string }) {
  // backend يحط الكوكي
  const res = await api.post("/auth/login", data);
  return res.data as { user: LoginData }; // لاحظ: ما في accessToken هنا
}
