import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putTag } from "@/services/tagService.ts";
import { TagType } from "@/types/TagType.ts";

export const useEditTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, tag }: { id: string; tag: TagType }) => {
      return putTag(id, tag);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notebooks'] }); {/* TODO */}
    },
  });
};