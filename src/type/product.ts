import { TLanguageKeys } from './language';

export type TCreateProductForm = {
  countInStock: string;
  price: string;
  categoryId: string;
  colorId: string;
  name: {
    [key in TLanguageKeys]: string;
  };
  description: {
    [key in TLanguageKeys]: string;
  };
  title: {
    [key in TLanguageKeys]: string;
  };
};
