import { api } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["notes"],
    mutationFn: async (noteId: string) => {
      await api.delete(`/note/${noteId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["notes"]});
    }
  })
}