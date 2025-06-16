import { useQuery } from '@tanstack/react-query';
import { getNoteMetadata } from '@/services/noteService.ts';

export const useNoteMetaData = (noteId: string) => {
  return useQuery({
    queryKey: ['notes', noteId, 'metadata'],
    queryFn: () => getNoteMetadata(noteId),
  });
};
