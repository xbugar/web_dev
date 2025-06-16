import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { postRegisterUser } from "@/services/authService.ts";
import {useAuthStore} from "@/lib/authStore.ts";

export const useRegisterUser = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore(s => s.setAuth);

  return useMutation({
    mutationFn:  postRegisterUser,

    onSuccess: () => {
      setAuth({ isAuth: true });
      navigate({ to: '/home' });
    },

    onError: (error) => {
      console.error("Registration failed:", error);
    }
  });
};