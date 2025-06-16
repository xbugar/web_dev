import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteFlashcard = ({ flashdeckId }: { flashdeckId: string }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (flashcardId: string) => {
      await api.delete(`/card/${flashcardId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['decks', flashdeckId] });
    },
  });
};
