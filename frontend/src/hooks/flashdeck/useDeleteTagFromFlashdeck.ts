import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTagFromFlashdeck } from '@/services/flashdeckService.ts';

export const useDeleteTagFromFlashdeck = ({ flashdeckId }: { flashdeckId: string }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ flashdeckId, tagId }: { flashdeckId: string; tagId: string }) => {
      return deleteTagFromFlashdeck(flashdeckId, tagId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['decks'] });
      queryClient.invalidateQueries({ queryKey: ['decks', flashdeckId] });
      queryClient.invalidateQueries({ queryKey: ['tags'] });
    },
  });
};
