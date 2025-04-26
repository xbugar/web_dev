import { api } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Notebook, CreateNotebook } from "@/types/Notebook.ts";

export const useCreateNotebook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["notebooks"],
    mutationFn: async ({ userId, data } : {userId: string, data: CreateNotebook} ) => {
      console.log(data);
      const response = await api.post(`/user/${userId}/notebook`, {userId, data});
      return response.data as Notebook;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["notebooks"]});
    }
  })
}