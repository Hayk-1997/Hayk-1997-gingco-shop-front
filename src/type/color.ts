import { TLanguageKeys } from './language';

export type TColor = {
  id: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  translations: {
    [key in TLanguageKeys]: {
      name: string;
    };
  };
};
