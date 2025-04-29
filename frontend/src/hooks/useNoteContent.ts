import { useQuery } from '@tanstack/react-query';
import { getNoteContent } from '@/services/noteService.ts';

export const useNoteContent = (notebookId: string, noteId: string) => {
  return useQuery({
    queryKey: ['notebooks', notebookId, noteId],
    queryFn: () => getNoteContent(noteId),
  });
};
