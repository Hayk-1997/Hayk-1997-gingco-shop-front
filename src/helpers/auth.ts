import { USER_TOKEN_KEY } from '../constants/global';

export const setUserToken = (token: string): void =>
  localStorage.setItem(USER_TOKEN_KEY, token);

export const getUserToken = (): string | null =>
  localStorage.getItem(USER_TOKEN_KEY);

export const clearToken = (): void => localStorage.clear();
