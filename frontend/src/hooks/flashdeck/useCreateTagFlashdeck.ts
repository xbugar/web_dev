import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateTag } from '@/types/tag';
import { postTagToFlashdeck } from '@/services/flashdeckService.ts';

export const useCreateTagFlashdeck = (flashdeckId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ flashdeckId, data }: { flashdeckId: string; data: CreateTag }) => {
      return postTagToFlashdeck(flashdeckId, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['decks'] });
      queryClient.invalidateQueries({ queryKey: ['decks', flashdeckId] });
      queryClient.invalidateQueries({ queryKey: ['tags'] });
    },
  });
};
