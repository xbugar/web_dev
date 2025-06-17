import {useQuery} from '@tanstack/react-query';
import { getSearch } from '@/services/searchService.ts';
import {SearchRequest} from "@/types/Search.ts";

export const  useFilter = (data: SearchRequest) => {
  return useQuery({
    queryKey: ['search', data],
    queryFn: async () => getSearch(data),
    enabled: !!data.q
  });
};
