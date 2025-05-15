import { api } from '@/services/index.ts';
import type { CreateTag, TagType } from '@/types/TagType.ts';

export const getAllTags = async (): Promise<TagType[]> => {
  return api.get(`/tag`).then(response => response.data as TagType[]);
};

export const getTagById = async (id: string): Promise<TagType> => {
  return api.get(`/tag/${id}`).then(response => response.data as TagType);
};

export const postTag = async (createTag: CreateTag): Promise<TagType> => {
  return api.post(`/tag`, createTag).then(response => response.data as TagType);
};

export const putTag = async (id: string, tag: TagType): Promise<void> => {
  return api.put(`/tag/${id}`, tag);
};
