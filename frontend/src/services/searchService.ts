import { api } from '@/services/index.ts';
import {Filters, SearchRequest, SearchResponse} from "@/types/Search.ts";


export const getSearch = async (request: SearchRequest): Promise<SearchResponse> => {
    return api.get('/search', {params: request}).then(response => response.data as SearchResponse);
}

export async function fetchUsers(
    filters: Filters<SearchRequest>
): Promise<SearchResponse> {
    return getSearch(filters);
}
