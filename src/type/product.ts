export type TCreateProduct = {
  countInStock: string;
  price: string;
  categoryId: string;
  colorId: string;
  name: {
    am: string;
    ru: string;
    en: string;
  };
  description: {
    am: string;
    ru: string;
    en: string;
  };
  title: {
    am: string;
    ru: string;
    en: string;
  };
};
