import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteFlashdeck = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (flashdeckId: string) => {
      await api.delete(`/deck/${flashdeckId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['decks'] });
    },
  });
};
