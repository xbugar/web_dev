import { useQuery } from "@tanstack/react-query";
import { getNotebook } from "@/services/notebookService.ts";

export function useNotebook(id: string)  {
  return useQuery({
    queryKey: ["notebookId", id],
    queryFn: () => getNotebook(id),
  });
}