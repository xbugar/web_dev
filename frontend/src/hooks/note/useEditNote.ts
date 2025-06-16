import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NoteModifiableProps, Note } from '@/types/note';

export const useEditNote = ({ notebookId }: { notebookId: string }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ noteId, data }: { noteId: string; data: NoteModifiableProps }) => {
      const response = await api.put(`/note/${noteId}`, data);
      return response.data as Note;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notebooks', notebookId] });
    },
  });
};
