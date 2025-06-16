import { useQuery } from '@tanstack/react-query';
import { getAuthStatus } from '@/services/authService';

export const useAuth = () => {
  return useQuery({
    queryKey: ['authStatus'],
    queryFn: getAuthStatus,
    retry: 1,
  });
};
