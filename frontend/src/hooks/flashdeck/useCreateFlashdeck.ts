import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Flashdeck, FlashdeckModifiableProps } from '@/types/flashdeck';

export const useCreateFlashdeck = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ data }: { data: FlashdeckModifiableProps }) => {
      const response = await api.post(`/user/deck`, data);
      return response.data as Flashdeck;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['decks'] });
    },
  });
};
