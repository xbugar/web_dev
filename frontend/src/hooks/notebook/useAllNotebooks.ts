import { useQuery } from '@tanstack/react-query';
import { getAllNotebooks } from '@/services/notebookService';

export const useAllNotebooks = () => {
  return useQuery({
    queryKey: ['notebooks'],
    queryFn: () => getAllNotebooks(),
  });
};
