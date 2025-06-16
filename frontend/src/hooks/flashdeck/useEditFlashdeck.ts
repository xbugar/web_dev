import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Flashdeck, FlashdeckModifiableProps } from '@/types/flashdeck';

export const useEditFlashdeck = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ flashdeckId, data }: { flashdeckId: string; data: FlashdeckModifiableProps }) => {
      const response = await api.put(`/deck/${flashdeckId}`, data);
      return response.data as Flashdeck;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['decks', variables.flashdeckId, 'cards'] });
      queryClient.invalidateQueries({ queryKey: ['decks'] });
    },
  });
};
