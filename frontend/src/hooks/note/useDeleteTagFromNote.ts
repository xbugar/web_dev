import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTagFromNote } from "@/services/noteService.ts";

export const useDeleteTagFromNote = ({ notebookId }: { notebookId: string }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ noteId, tagId }: { noteId: string; tagId: string }) => {
      return deleteTagFromNote(noteId, tagId);
    },
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries({ queryKey: ['notebooks', notebookId] });
        queryClient.invalidateQueries({ queryKey:['notes', variables.noteId, 'metadata'] });
        queryClient.invalidateQueries({ queryKey:['tags'] });
    },
  });
};
