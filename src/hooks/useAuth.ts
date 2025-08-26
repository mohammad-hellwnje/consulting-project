import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../services/loginAPI";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { email: string; password: string }) => login(data),
    onSuccess: async () => {
      // بعد تسجيل الدخول، نعيد جلب بيانات المستخدم
      await queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });
}