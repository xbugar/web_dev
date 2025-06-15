import { create } from 'zustand';

interface AuthState {
  auth: { isAuth: boolean };
  setAuth: (auth: { isAuth: boolean }) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  auth: { isAuth: false },
  setAuth: (auth) => set({ auth }),
}));
