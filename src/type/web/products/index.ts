export type TProduct = {
  id: number,
  countInStock: number,
  price: number
  categoryId: number
  colorId: number,
  translations: TProductTranslations,
  images: TProductImage[],
  createdAt: string
  updatedAt: string
};

export type TProductTranslations = {
  en: { name: string, title: string, description: string },
  ru: { name: string, title: string, description: string },
  am: { name: string, title: string, description: string },
};

export type TProductImage = {
  url: string,
  main: boolean,
};

export type TProductsState = {
  products: TProduct[];
  isGettingProduct: boolean,
  isGetProductSuccess: boolean,
  isGetProductFailure: boolean,
  product: TProduct;
  isGettingProducts: boolean,
  isGetProductsSuccess: boolean,
  isGetProductsFailure: boolean,

  successMessage: string;
  errorMessage: string;
};
