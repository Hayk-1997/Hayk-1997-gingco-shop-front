import { ADMIN_TOKEN_KEY, USER_TOKEN_KEY } from '../constants/global';

export const setUserToken = (token: string): void =>
  localStorage.setItem(USER_TOKEN_KEY, token);

export const setAdminToken = (token: string): void =>
  localStorage.setItem(ADMIN_TOKEN_KEY, token);

export const getAdminToken = (): string | null =>
  localStorage.getItem(ADMIN_TOKEN_KEY);
