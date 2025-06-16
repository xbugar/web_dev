import { useQuery } from '@tanstack/react-query';
import { getAllTags } from "@/services/tagService.ts";

export const useAllTags = () => {
  return useQuery({
    queryKey: ['tags'],
    queryFn: () => getAllTags(),
  });
};
