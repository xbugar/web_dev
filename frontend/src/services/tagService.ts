import { api } from '@/services/index.ts';
import type { CreateTag, Tag } from '@/types/Tag.ts';

export const getAllTags = async (): Promise<Tag[]> => {
  return api.get(`/tag`).then(response => response.data as Tag[]);
};

export const getTagById = async (id: string): Promise<Tag> => {
  return api.get(`/tag/${id}`).then(response => response.data as Tag);
};

export const postTag = async (createTag: CreateTag): Promise<Tag> => {
  return api.post(`/tag`, createTag).then(response => response.data as Tag);
};

export const putTag = async (id: string, tag: Tag): Promise<void> => {
  return api.put(`/tag/${id}`, tag);
};
