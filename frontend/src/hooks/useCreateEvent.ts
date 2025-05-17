import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateEvent } from "@/types/EventType.ts";
import { postEvent } from "@/services/calendarService.ts";

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ data }: { data: CreateEvent }) => {
      return postEvent(data);
    },
    onError: async () => {
      await queryClient.invalidateQueries({queryKey: ['events']})
    }
  })

}