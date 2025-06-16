import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putUser } from "@/services/userService.ts";

export const useEditUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};
