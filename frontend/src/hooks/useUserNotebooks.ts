import { useQuery } from '@tanstack/react-query';
import { getNotebooks } from '@/services/userService.ts';

export const useUserNotebooks = (userId: string) => {
  return useQuery({
    queryKey: ['notebooks'],
    queryFn: () => getNotebooks(userId),
  });
};
