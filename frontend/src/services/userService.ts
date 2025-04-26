import { api } from "@/services/index.ts";
import type { Notebook } from "@/types/Notebook.ts";
import type { User } from "@/types/User.ts";

export const getNotebooks = async (userId: string) : Promise<Notebook[]> => {
  return api.get(`/user/${userId}/notebooks`).then(response => response.data as Notebook[]);
}

export const getUserById = async (userId: string) : Promise<User> => {
  return api.get(`/user/${userId}`).then(response => response.data as User);
}

// export const postNotebook = async (userId: string, data:): Promise<Notebook> => {
//   return api.post()
// }