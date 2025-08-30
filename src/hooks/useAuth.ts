import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, signUp, logout } from "../services/loginAPI";

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

export function useSignUp() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { name: string; email: string; password: string }) => signUp(data),
    onSuccess: async () => {
      // بعد التسجيل، نعيد جلب بيانات المستخدم
      await queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });
}


export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // مسح جميع البيانات من الكاش
      queryClient.clear();
    },
  });
}