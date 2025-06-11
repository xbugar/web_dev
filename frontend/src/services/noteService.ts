import { api } from '@/services/index.ts';
import type { Note } from '@/types/Note.ts';
import { CreateTag, TagType } from "@/types/TagType.ts";

export const getNoteMetadata = async (id: string): Promise<Note> => {
  return api.get(`/note/${id}`).then(response => response.data as Note);
};

export const getNoteContent = async (id: string): Promise<{ content: string }> => {
  return api.get(`/note/${id}/content`).then(response => response.data);
};

export const postTagToNote = async (noteId: string, data: CreateTag): Promise<TagType> => {
  return api.post(`/note/${noteId}/tag`, data).then((res) => res.data as TagType)
}

export const deleteTagFromNote = async (noteId: string, tagId: string): Promise<void> => {
  return api.delete(`/note/${noteId}/tag/${tagId}`);
}