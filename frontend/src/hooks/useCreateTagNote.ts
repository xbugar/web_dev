import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateTag, TagType } from "@/types/TagType.ts";

export const useCreateTagNote = (notebookId : string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ noteId, data }: { noteId: string; data : CreateTag }) => {
      console.log(data);
      return api.post(`/note/${noteId}/tag`, data).then((res) => res.data as TagType);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['notebooks', notebookId] });
      queryClient.invalidateQueries({ queryKey:['notes', variables.noteId, 'metadata'] });
      queryClient.invalidateQueries({ queryKey:['tags' ] });
    },
  });
};
