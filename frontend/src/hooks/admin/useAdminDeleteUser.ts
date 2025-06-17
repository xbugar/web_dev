import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/services";

export const useAdminDeleteUser = ({userId}: { userId: string }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId: string) => {
      await api.delete(`/admin/users/${userId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['adminDashboard', userId]});
      queryClient.invalidateQueries({queryKey: ['adminDashboard']});
    },
  });
};
