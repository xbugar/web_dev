import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateTag } from "@/types/TagType.ts";
import { postTagToNote } from "@/services/noteService.ts";

export const useCreateTagNote = (notebookId : string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ noteId, data }: { noteId: string; data: CreateTag }) => {
      return postTagToNote(noteId, data);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['notebooks', notebookId] });
      queryClient.invalidateQueries({ queryKey:['notes', variables.noteId, 'metadata'] });
      queryClient.invalidateQueries({ queryKey:['tags'] });
    },
  });
};
