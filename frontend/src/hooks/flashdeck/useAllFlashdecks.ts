import { useQuery } from '@tanstack/react-query';
import { getAllFlashdecks } from '@/services/flashdeckService';

export const useAllFlashdecks = () => {
  return useQuery({
    queryKey: ['decks'],
    queryFn: () => getAllFlashdecks(),
  });
};
