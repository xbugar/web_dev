import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateTag } from "@/types/TagType.ts";
import { postTagToNote } from "@/services/noteService.ts";

export const useCreateTagNotebook = (notebookId : string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ notebookId, data }: { notebookId: string; data: CreateTag }) => {
      return postTagToNote(notebookId, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notebooks', notebookId] });
      queryClient.invalidateQueries({ queryKey:['tags'] });
    },
  });
};
