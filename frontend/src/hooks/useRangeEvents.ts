import { useQuery } from "@tanstack/react-query";
import { getEventsByDateRange } from "@/services/calendarService.ts";

export const useRangeEvents = (start: string, end: string) => {
  return useQuery({
    queryKey: ['events', start, end],
    queryFn: () => getEventsByDateRange(start, end),
  });
}