import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateTag } from '@/types/tag';
import { postTagToNotebook } from '@/services/notebookService.ts';

export const useCreateTagNotebook = (notebookId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ notebookId, data }: { notebookId: string; data: CreateTag }) => {
      return postTagToNotebook(notebookId, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notebooks'] });
      queryClient.invalidateQueries({ queryKey: ['notebooks', notebookId] });
      queryClient.invalidateQueries({ queryKey: ['tags'] });
    },
  });
};
