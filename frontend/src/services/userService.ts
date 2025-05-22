import { api } from '@/services/index.ts';
import type { Notebook } from '@/types/Notebook.ts';
import type { User } from '@/types/User.ts';

export const getNotebooks = async (): Promise<Notebook[]> => {
  return api.get(`/user/notebooks`).then(response => response.data as Notebook[]);
};

export const getUserById = async (): Promise<User> => {
  return api.get(`/user`).then(response => response.data as User);
};

// export const postNotebook = async (userId: string, data:): Promise<Notebook> => {
//   return api.post()
// }
