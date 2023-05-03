import { TCreateProduct } from '../../../../type/product';

export const defaultValue: TCreateProduct = {
  countInStock: '',
  price: '',
  categoryId: '',
  colorId: '',
  name: {
    am: '',
    ru: '',
    en: '',
  },
  description: {
    am: '',
    ru: '',
    en: '',
  },
  title: {
    am: '',
    ru: '',
    en: '',
  },
};
