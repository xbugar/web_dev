import { useQuery } from "@tanstack/react-query";
import { getNotebookById } from "@/services/notebookService.ts";

export function useNotebook(id: string)  {
  return useQuery({
    queryKey: ["notebookId", id],
    queryFn: () => getNotebookById(id),
  });
}