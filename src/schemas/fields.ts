import { z } from "zod";

export const emailField = z.string().email("صيغة الإيميل غير صحيحة");
export const passwordField = z.string().min(6, "كلمة المرور يجب ألا تقل عن 6 حروف");
export const nameField = z.string().min(2, "الاسم يجب أن لا يقل عن حرفين");
export const messageField = z.string().min(10, "الرسالة يجب ألا تقل عن 10 حروف");

export const signupSchema = z.object({
  fullName: z.string().min(3, "الاسم يجب أن يحتوي على 3 أحرف على الأقل"),
  email: z.string().email("البريد الإلكتروني غير صالح"),
  password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
  confirmPassword: z.string(),
  phoneNumber: z.string().min(7, "رقم الهاتف غير صالح"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "كلمة المرور غير متطابقة",
  path: ["confirmPassword"],
});
// ✅ تسجيل الدخول
export const loginSchema = z.object({
  email: z.string().email("البريد الإلكتروني غير صالح"),
  password: z.string().min(6, "كلمة المرور مطلوبة"),
});
export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;