import { api } from '@/services/index.ts';
import type { Notebook } from '@/types/Notebook.ts';
import { Note } from '@/types/Note.ts';
import { CreateTag, TagType } from "@/types/TagType.ts";

export const getNotebookById = async (notebookId: string): Promise<Notebook> => {
  if (!notebookId) {
    throw new Error('No notebook ID provided');
  }

  return api.get(`/notebook/${notebookId}`).then(response => response.data as Notebook);
};

export const getNotesFromNotebook = async (notebookId: string): Promise<Note[]> => {
  return api.get(`/notebook/${notebookId}/notes`).then(response => response.data as Note[]);
};

export const postTagToNotebook = async (notebookId: string, data: CreateTag): Promise<TagType> => {
  return api.post(`/notebook/${notebookId}/tag`, data).then((res) => res.data as TagType)
}

export const deleteTagFromNotebook = async (notebookId: string, tagId: string): Promise<void> => {
  return api.delete(`/notebook/${notebookId}/tag/${tagId}`);
}