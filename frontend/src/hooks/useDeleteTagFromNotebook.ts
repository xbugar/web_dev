import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTagFromNotebook } from "@/services/notebookService.ts";

export const useDeleteTagFromNotebook = ({ notebookId }: { notebookId: string }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ notebookId, tagId }: { notebookId: string; tagId: string }) => {
      return deleteTagFromNotebook(notebookId, tagId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notebooks', notebookId] });
      queryClient.invalidateQueries({ queryKey:['tags'] });
    },
  });
};
