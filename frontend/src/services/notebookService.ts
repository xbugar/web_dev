import { api } from '@/services/index';
import type { Notebook } from '@/types/notebook';
import { Note } from '@/types/note';
import { CreateTag, TagType } from '@/types/tagType';

export const getAllNotebooks = async (): Promise<Notebook[]> => {
  return api.get(`user/notebooks`).then(response => response.data as Notebook[]);
};

export const getNotebookById = async (notebookId: string): Promise<Notebook> => {
  return api.get(`/notebook/${notebookId}`).then(response => response.data as Notebook);
};

export const getNotesFromNotebook = async (notebookId: string): Promise<Note[]> => {
  return api.get(`/notebook/${notebookId}/notes`).then(response => response.data as Note[]);
};

export const postTagToNotebook = async (notebookId: string, data: CreateTag): Promise<TagType> => {
  return api.post(`/notebook/${notebookId}/tag`, data).then(res => res.data as TagType);
};

export const deleteTagFromNotebook = async (notebookId: string, tagId: string): Promise<void> => {
  return api.delete(`/notebook/${notebookId}/tag/${tagId}`);
};
