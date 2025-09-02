import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from 'react-hot-toast';
import { login, signUp, getCurrentUser, logout, resetPass, resetPassword } from "../services/loginAPI";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { email: string; password: string }) => login(data),
    onSuccess: async () => {
      // بعد تسجيل الدخول، نعيد جلب بيانات المستخدم
      await queryClient.invalidateQueries({ queryKey: ["me"] });
      await queryClient.refetchQueries({ queryKey: ["me"] });
    },
  });
}

export function useSignUp() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { fullName: string; email: string; password: string; confirmPassword : string; phoneNumber: string; }) => signUp(data),
    onSuccess: async () => {
      // بعد التسجيل، نعيد جلب بيانات المستخدم
      await queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });
}


export function useCurrentUser() {
  return useQuery({
    queryKey: ["me"],
    queryFn: getCurrentUser,
    retry: (failureCount) => {
      return failureCount < 1; // محاولة واحدة فقط
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // مسح جميع البيانات من الكاش
      queryClient.clear();
      toast.success("تم تسجيل الخروج بنجاح");
    },
  });
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: (data: { email: string }) => resetPass(data),
  });
}

export function useResetPassword() {
  return useMutation({
    mutationFn: (data: {
      resetCode: string;
      email: string;
      password: string;
      confirmPassword: string;
    }) => resetPassword(data),
  });
}