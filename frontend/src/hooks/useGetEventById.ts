import { useQuery } from '@tanstack/react-query';
import { getEvent } from "@/services/calendarService.ts";

export function useGetEventById(eventId: string) {
  return useQuery({
    queryKey: ['events', eventId],
    queryFn: () => getEvent(eventId),
  });
}
