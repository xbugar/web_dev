import { api } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateNote, Note } from "@/types/Note.ts";

export const useEditNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["notes"],
    mutationFn: async ({ noteId, data } : {noteId: string, data: CreateNote} ) => {
      console.log(data);
      const response = await api.put(`/note/${noteId}`, data);
      return response.data as Note;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["notes"]});
    }
  })
}