import { api } from "@/services/index.ts";
import type { Tag } from "@/types/Tag.ts";

export const getAllTags = async () : Promise<Tag[]> => {
  return api.get(`/tag`).then(response => response.data as Tag[]);
}

export const getTagById = async (id: string) : Promise<Tag> => {
  return api.get(`/tag/${id}`).then(response => response.data as Tag);
}