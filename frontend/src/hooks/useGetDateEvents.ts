import { useQuery } from "@tanstack/react-query";
import { getEventsByDate } from "@/services/calendarService.ts";

export const useGetDateEvents = (date: string) => {
  return useQuery({
    queryKey: ['events', date ],
    queryFn: () => getEventsByDate(date),
  });
}