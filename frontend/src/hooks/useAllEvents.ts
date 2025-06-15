import { useQuery } from "@tanstack/react-query";
import { getUserEvents } from "@/services/calendarService.ts";

export const useAllEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: () => getUserEvents(),
  });
}