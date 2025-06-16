import { useQuery } from '@tanstack/react-query';
import { getFlashcardsFromFlashdeck } from '@/services/flashdeckService';

export const useFlashcardsByFlashdeck = (flashdeckId: string) => {
  return useQuery({
    queryKey: ['decks', flashdeckId, 'cards'],
    queryFn: () => getFlashcardsFromFlashdeck(flashdeckId),
  });
};
