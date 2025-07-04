import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Notebook, NotebookModifiableProps } from '@/types/notebook';

export const useCreateNotebook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ data }: { data: NotebookModifiableProps }) => {
      const response = await api.post(`/user/notebook`, data);
      return response.data as Notebook;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notebooks'] });
    },
  });
};
