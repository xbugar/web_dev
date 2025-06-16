import { CreateEvent } from '@/types/event';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putEvent } from '@/services/calendarService.ts';

export const useEditEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ eventId, data }: { eventId: string; data: CreateEvent }) => {
      return putEvent(eventId, data);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['events', variables.eventId] });
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });
};
