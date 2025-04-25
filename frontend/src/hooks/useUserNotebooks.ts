import { useQuery } from "@tanstack/react-query";
import { getNotebooks } from "@/services/userService.ts";

export const useUserNotebooks = (id: string) => {
  return useQuery({
    queryKey: ["userNotebooks", id],
    queryFn: () => getNotebooks(id),  })
}