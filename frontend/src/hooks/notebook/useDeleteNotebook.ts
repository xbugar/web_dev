import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteNotebook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (notebookId: string) => {
      await api.delete(`/notebook/${notebookId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notebooks'] });
    },
  });
};
