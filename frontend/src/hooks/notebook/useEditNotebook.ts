import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Notebook, NotebookModifiableProps } from '@/types/notebook';

export const useEditNotebook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ notebookId, data }: { notebookId: string; data: NotebookModifiableProps }) => {
      const response = await api.put(`/notebook/${notebookId}`, data);
      return response.data as Notebook;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['notebooks', variables.notebookId, 'notes'] });
      queryClient.invalidateQueries({ queryKey: ['notebooks'] });
    },
  });
};
