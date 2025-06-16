import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { postLoginUser } from '@/services/authService.ts';
import { useAuthStore } from '@/lib/authStore';

export const useLoginUser = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore(s => s.setAuth);

  return useMutation({
    mutationFn: postLoginUser,

    onSuccess: () => {
      setAuth({ isAuth: true }); // ✅ update Zustand
      navigate({ to: '/home' }); // ✅ navigate to protected page
    },

    onError: error => {
      console.error('Registration failed:', error);
    },
  });
};
