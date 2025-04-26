import { useQuery } from "@tanstack/react-query";
import { getNotebookById } from "@/services/notebookService.ts";

export function useNotebook(id: string)  {
  return useQuery({
    queryKey: ["notebook", id],
    queryFn: () => getNotebookById(id),
  });
}