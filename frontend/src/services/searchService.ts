import { api } from '@/services/index.ts';
import {SearchRequest, SearchResponse} from "@/types/Search.ts";


export const getSearch = async (request: SearchRequest): Promise<SearchResponse> => {
    return api.get('/search', {params: request}).then(response => response.data as SearchResponse);
}