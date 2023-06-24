import { TLanguageKeys } from './language';
import { TProduct, TProductImage } from './web/products';

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

export type TProductShopCart = {
  quantity: string;
  color: string;
} & TProduct;
