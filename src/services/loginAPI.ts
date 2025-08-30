import { api } from "./axios";

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface LoginData {
  email: string;
  password: string;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export async function login(data: LoginData) {
  // backend يحط الكوكي
  const res = await api.post("/auth/login", data);
  return res.data as { user: User };
}

export async function signUp(data: SignUpData) {
  const res = await api.post("/auth/register", data);
  return res.data as { user: User };
}


export async function logout() {
  const res = await api.post("/auth/logout");
  return res.data;
}
