import { api } from "@/services/index.ts";
import type { Notebook } from "@/types/Notebook.ts";
import { Note } from "@/types/Note.ts";

export const getNotebookById = async (notebookId: string) : Promise<Notebook> => {
  if (!notebookId) {
    throw new Error("No notebook ID provided");
  }

  return api.get(`/notebook/${notebookId}`).then(response => response.data as Notebook);
}

export const getNotesFromNotebook = async (notebookId: string) : Promise<Note[]> => {
  return api.get(`/notebook/${notebookId}/notes`).then(response => response.data as Note[]);
}