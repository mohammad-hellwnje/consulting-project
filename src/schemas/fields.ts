import { z } from "zod";

export const emailField = z.string().email("صيغة الإيميل غير صحيحة");
export const passwordField = z.string().min(6, "كلمة المرور يجب ألا تقل عن 6 حروف");
export const nameField = z.string().min(2, "الاسم يجب أن لا يقل عن حرفين");
export const messageField = z.string().min(10, "الرسالة يجب ألا تقل عن 10 حروف");