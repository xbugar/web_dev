import { api } from '@/services/index.ts';
import type { CreateUser, LoginUser, SessionId } from '@/types/User.ts';

export const postRegisterUser = async (user: CreateUser) => {
  return api.post(`/auth/register`, user);
};

export const postLoginUser = async (user: LoginUser) => {
  return api.post(`/auth/login`, user).then(response => response.data as SessionId);
}