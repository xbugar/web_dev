import { useQuery } from "@tanstack/react-query";
import { getNotesFromNotebook } from "@/services/notebookService.ts";

export const useNotesByNotebook = (id: string) => {
  return useQuery({
    queryKey: ["notebook", id, "notes"],
    queryFn: () => getNotesFromNotebook(id),  })
}