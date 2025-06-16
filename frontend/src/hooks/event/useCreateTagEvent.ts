import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateTag } from '@/types/tagType';
import { postTagToEvent } from '@/services/calendarService.ts';

export const useCreateTagEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ eventId, data }: { eventId: string; data: CreateTag }) => {
      return postTagToEvent(eventId, data);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['events', variables.eventId] });
      queryClient.invalidateQueries({ queryKey: ['tags'] });
    },
  });
};
