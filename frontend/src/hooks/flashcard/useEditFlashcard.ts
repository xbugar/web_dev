import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FlashcardModifiableProps, Flashcard } from '@/types/flashcard';

export const useEditFlashcard = ({ flashdeckId }: { flashdeckId: string }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ flashcardId, data }: { flashcardId: string; data: FlashcardModifiableProps }) => {
      const response = await api.put(`/card/${flashcardId}`, data);
      return response.data as Flashcard;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['decks', flashdeckId] });
    },
  });
};
