import { api } from '@/services/index.ts';
import type { CreateUser, LoginUser } from '@/types/User.ts';

export const postRegisterUser = async (user: CreateUser) => {
  return api.post(`/auth/register`, user).then(function (res) {
    console.log(res.data);
    console.log(res.status);
  });
};

export const postLoginUser = async (user: LoginUser) => {
  return api.post(`/auth/login`, user);
};

export const postLogoutUser = async () => {
  return api.post(`/auth/logout`);
};

export const getAuthStatus = async (): Promise<boolean> => {
  return api.get('/auth/status').then(response => response.status == 200);
};
