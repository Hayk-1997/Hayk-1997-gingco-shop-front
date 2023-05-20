import { TCategory, TCreateCategoryForm } from '../../../type/admin/category';

export const resolveCategoryFormValues = (
  category: TCategory
): TCreateCategoryForm => {
  console.log(category);
  return {
    ...category,
    name: {
      am: category.translations.am.name,
      en: category.translations.en.name,
      ru: category.translations.ru.name,
    },
  };
};

export const defaultValue = {
  parentId: null,
  name: {
    am: '',
    ru: '',
    en: '',
  },
};
