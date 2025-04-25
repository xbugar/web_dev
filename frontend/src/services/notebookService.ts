import { api } from "@/services/index.ts";
import type { Notebook } from "@/types/Notebook.ts";

export const getNotebookById = async (notebookId: string) : Promise<Notebook> => {
  return api.get(`/notebook/${notebookId}`).then(response => response.data as Notebook);
}
