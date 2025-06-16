import { useQuery } from '@tanstack/react-query';
import { getFlashdeckById } from '@/services/flashdeckService';

export function useFlashdeck(flashdeckId: string) {
  return useQuery({
    queryKey: ['deck', flashdeckId],
    queryFn: () => {
      return getFlashdeckById(flashdeckId);
    },
  });
}
