import { useQuery } from "@tanstack/react-query";
import { getNotebooks } from "@/services/userService.ts";

export const useUserNotebooks = (userId: string) => {
  return useQuery({
    queryKey: ["user", userId, "notebooks"],
    queryFn: () => getNotebooks(userId),  })
}