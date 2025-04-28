import { useQuery } from "@tanstack/react-query";
import { getNotesFromNotebook } from "@/services/notebookService.ts";

export const useNotesByNotebook = (notebookId: string) => {
  return useQuery({
    queryKey: ["notebooks", notebookId, "notes"],
    queryFn: () => getNotesFromNotebook(notebookId),  })
}