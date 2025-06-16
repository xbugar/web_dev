import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Flashcard, FlashcardModifiableProps } from '@/types/flashcard';

export const useCreateFlashcard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      flashdeckId,
      data,
    }: {
      flashdeckId: string;
      data: FlashcardModifiableProps;
    }) => {
      const response = await api.post(`/deck/${flashdeckId}`, data);
      return response.data as Flashcard;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['decks', variables.flashdeckId] });
    },
  });
};
