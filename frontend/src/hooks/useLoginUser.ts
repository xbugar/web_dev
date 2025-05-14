import { useMutation } from '@tanstack/react-query';
import { useNavigate } from "@tanstack/react-router";
import { postLoginUser } from "@/services/authService.ts";

export const useLoginUser = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postLoginUser,

    onSuccess: () => {
      navigate({ to: '/home' });
    },

    onError: (error) => {
      console.error("Registration failed:", error);
    }
  });
};