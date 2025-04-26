import { useQuery } from "@tanstack/react-query";
import { getNotebookById } from "@/services/notebookService.ts";

export function useNotebook(id: string)  {
  return useQuery({
    queryKey: ["notebook", id],
    queryFn: () => {
      if (!id) {
        return Promise.reject(new Error("No notebook ID provided"));
      }
      return getNotebookById(id);
    },
    enabled: !!id,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });
}