import { api } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateTag, TagType } from "@/types/TagType.ts";

export const useCreateTagNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ noteId, data }: { noteId: string; data : CreateTag }) => {
      console.log(data);
      return api.post(`/note/${noteId}/tag`, data).then((res) => res.data as TagType);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notebooks'] }); {/*TODO*/}
    },
  });
};
