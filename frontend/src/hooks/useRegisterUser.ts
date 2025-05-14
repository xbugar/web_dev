import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { postRegisterUser } from "@/services/authService.ts";

export const useRegisterUser = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn:  postRegisterUser,

    onSuccess: () => {
      navigate({ to: '/login' });
    },

    onError: (error) => {
      console.error("Registration failed:", error);
    }
  });
};