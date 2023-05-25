import { TLanguageKeys } from '../../language';

export type TProduct = {
  id: number;
  countInStock: number;
  price: number;
  categoryId: number;
  colorId: number;
  translations: TProductTranslations;
  images: TProductImage[];
  createdAt: string;
  updatedAt: string;
};

type TTranslation = {
  name: string;
  title: string;
  description: string;
};

export type TProductTranslations = {
  [key in TLanguageKeys]: TTranslation;
};

export type TProductImage = {
  url: string;
  main: boolean;
  id: number;
};

export type TProductsState = {
  products: TProduct[];
  isGettingProduct: boolean;
  isGetProductSuccess: boolean;
  isGetProductFailure: boolean;
  product: TProduct;
  isGettingProducts: boolean;
  isGetProductsSuccess: boolean;
  isGetProductsFailure: boolean;

  successMessage: string;
  errorMessage: string;
};
