import { api } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateNote, Note } from "@/types/Note.ts";

export const useEditNote = ({notebookId} : {notebookId: string}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ noteId, data } : {noteId: string, data: CreateNote} ) => {
      const response = await api.put(`/note/${noteId}`, data);
      return response.data as Note;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["notebooks", notebookId]});
    }
  })
}