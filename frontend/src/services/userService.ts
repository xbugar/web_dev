import { api } from '@/services/index.ts';
import type { Notebook } from '@/types/Notebook.ts';
import type { UpdateUser, User } from '@/types/User.ts';

export const getNotebooks = async (): Promise<Notebook[]> => {
  return api.get(`/user/notebooks`).then(response => response.data as Notebook[]);
};

export const getUser = async (): Promise<User> => {
  return api.get(`/user`).then(response => response.data as User);
};

export const putUser = async (data: UpdateUser) => {
  return api.put(`/user`, data).then(response => response.data as User);
};