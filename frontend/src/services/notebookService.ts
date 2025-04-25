import { api } from "@/services/index.ts";
import { Notebook } from "@/types/Notebook.ts";

export const getNotebook = async (notebookId: string) : Promise<Notebook> => {
  return api.get(`/notebook/${notebookId}`).then(response => response.data as Notebook);
}
