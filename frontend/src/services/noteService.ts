import { api } from "@/services/index.ts";
import type { Note } from "@/types/Note.ts";

export const getNoteMetadata = async (id: string) : Promise<Note> => {
  return api.get(`/note/${id}`).then(response => response.data as Note);
}

export const getNoteContent = async (id: string) : Promise<string> => {
  return api.get(`/note/${id}/content`).then(response => response.data);
}

