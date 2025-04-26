import { useQuery } from "@tanstack/react-query";
import { getNoteMetadata } from "@/services/noteService.ts";

export const useNoteMetaData = (id: string) => {
  return useQuery({
    queryKey: ["note", id, "metaData"],
    queryFn: () => getNoteMetadata(id),  })
}