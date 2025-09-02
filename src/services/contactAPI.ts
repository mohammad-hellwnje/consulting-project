import { api } from "./axios";

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

export async function submitContact(data: ContactData) {
  const res = await api.post("/contact", data);
  return res.data as ContactResponse;
}
