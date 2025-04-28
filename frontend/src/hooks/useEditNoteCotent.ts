import { api } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEditNoteContent = ({id}: {id: string}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ noteId, content } : {noteId: string, content: string}) => {
      console.log("halohalooo", id, noteId, content);
      const response = await api.put(`/note/${noteId}/content/`, { content });
      return response.data;
    },
    onSuccess: (_, variables) =>
      queryClient.invalidateQueries({queryKey: ["notebooks", id, variables.noteId]})
  })
}