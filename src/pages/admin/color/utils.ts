import { TColor, TCreateColorForm } from '../../../type/color';

export const resolveColorFormValues = (color: TColor): TCreateColorForm => {
  return {
    ...color,
    name: {
      am: color.translations.am.name,
      en: color.translations.en.name,
      ru: color.translations.ru.name,
    },
    code: color.code,
  };
};

export const defaultValue = {
  code: '',
  name: {
    am: '',
    ru: '',
    en: '',
  },
};
