import { useQuery } from '@tanstack/react-query';
import { getNotebookById } from '@/services/notebookService.ts';

export function useNotebook(notebookId: string) {
  return useQuery({
    queryKey: ['notebooks', notebookId],
    queryFn: () => {
      //   if (!notebookId) {
      //     return Promise.reject(new Error("No notebook ID provided"));
      //   }
      return getNotebookById(notebookId);
    },
    // enabled: !!notebookId,
    // retry: 1,
    // staleTime: 1000 * 60 * 5,
  });
}
