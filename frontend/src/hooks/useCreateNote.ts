import { api } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateNote, Note } from "@/types/Note.ts";

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ notebookId, data } : {notebookId: string, data: CreateNote} ) => {
      const response = await api.post(`/notebook/${notebookId}/note`, data);
      return response.data as Note;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({queryKey: ["notebooks", variables.notebookId]});
    }
  })
}