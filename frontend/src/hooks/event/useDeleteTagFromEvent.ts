import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTagFromEvent } from "@/services/calendarService.ts";

export const useDeleteTagFromEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ eventId, tagId }: { eventId: string; tagId: string }) => {
      return deleteTagFromEvent(eventId, tagId);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['events', variables.eventId] });
      queryClient.invalidateQueries({ queryKey:['tags'] });
    },
  });
};
