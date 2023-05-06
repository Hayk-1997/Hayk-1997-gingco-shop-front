import { TCreateProductForm } from '../../../../type/product';

export const defaultValue: TCreateProductForm = {
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
