import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NoteModifiableProps, Note } from '@/types/note';

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ notebookId, data }: { notebookId: string; data: NoteModifiableProps }) => {
      const response = await api.post(`/notebook/${notebookId}/note`, data);
      return response.data as Note;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['notebooks', variables.notebookId] });
    },
  });
};
