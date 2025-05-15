import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putTag } from "@/services/tagService.ts";
import { Tag } from "@/types/Tag.ts";

export const useEditTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, tag }: { id: string; tag: Tag }) => {
      return putTag(id, tag);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notebooks'] }); {/* TODO */}
    },
  });
};