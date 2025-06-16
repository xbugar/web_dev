import { api } from '@/services/index.ts';
import type { UpdateUser, User } from '@/types/user';

export const getUser = async (): Promise<User> => {
  return api.get(`/user`).then(response => response.data as User);
};

export const putUser = async (data: UpdateUser) => {
  return api.put(`/user`, data).then(response => response.data as User);
};
