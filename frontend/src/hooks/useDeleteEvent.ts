import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteEvent } from "@/services/calendarService.ts";


export const useDeleteEvent = ({ eventId }: { eventId: string}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ eventId }: { eventId: string }) => {
      return deleteEvent(eventId);
  },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events', eventId]});
      // queryClient.invalidateQueries({ queryKey: ['events', eventId]});
    }

  })
}