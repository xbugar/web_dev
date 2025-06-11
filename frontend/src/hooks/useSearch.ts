import {useMutation, useQueryClient} from '@tanstack/react-query';
import {SearchRequest} from "@/types/Search.ts";
import {getSearch} from "@/services/searchService.ts";

export const useSearch = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({data}: {data: SearchRequest}) => {
            return getSearch(data);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['search']});
        }
    });
};
