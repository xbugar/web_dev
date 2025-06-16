import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "@/services/calendarService.ts";

export const useAllEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: () => getAllEvents(),
  });
}