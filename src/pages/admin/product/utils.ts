import { TProduct } from '../../../type/web/products';
import { TCreateProductForm, TUpdateProductForm } from '../../../type/product';

export const resolveProductFormValues = (
  product: TProduct
): TUpdateProductForm => {
  return {
    ...product,
    name: {
      am: product.translations.am.name,
      ru: product.translations.ru.name,
      en: product.translations.en.name,
    },
    description: {
      am: product.translations.am.description,
      ru: product.translations.ru.description,
      en: product.translations.en.description,
    },
    title: {
      am: product.translations.am.title,
      ru: product.translations.ru.title,
      en: product.translations.en.title,
    },
    images: product.images,
  };
};

export const defaultValue: TCreateProductForm = {
  countInStock: null,
  price: null,
  categoryId: null,
  colorId: null,
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
