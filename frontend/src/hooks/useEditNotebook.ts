import { api } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Notebook, CreateNotebook } from "@/types/Notebook.ts";

export const useEditNotebook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["notebooks"],
    mutationFn: async ({ notebookId, data } : {notebookId: string, data: CreateNotebook} ) => {
      console.log(data);
      const response = await api.put(`/notebook/${notebookId}`, data);
      return response.data as Notebook;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["notebooks"]});
    }
  })
}