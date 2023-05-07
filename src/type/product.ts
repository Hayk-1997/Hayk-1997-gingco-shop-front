import { TLanguageKeys } from './language';
import { TProductImage } from './web/products';

export type TCreateProductForm = {
  countInStock: number | null;
  price: number | null;
  categoryId: number | null;
  colorId: number | null;
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

export type TUpdateProductForm = {
  images: TProductImage[];
} & TCreateProductForm;
