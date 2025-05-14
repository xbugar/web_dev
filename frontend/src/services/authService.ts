import { api } from '@/services/index.ts';
import type { CreateUser, LoginUser } from '@/types/User.ts';

export const postRegisterUser = async (user: CreateUser) => {
  return api.post(`/auth/register`, user);
};

export const postLoginUser = async (user: LoginUser) => {
  return api.post(`/auth/login`, user);
}