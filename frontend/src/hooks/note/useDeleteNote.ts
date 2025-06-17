import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteNote = ({ notebookId }: { notebookId: string }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (noteId: string) => {
      await api.delete(`/note/${noteId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notebooks', notebookId] });
    },
  });
};
