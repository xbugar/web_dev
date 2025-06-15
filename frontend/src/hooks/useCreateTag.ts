import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTag } from "@/services/tagService.ts";

export const useCreateTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notebooks'] }); {/* TODO */}
    },
  });
};