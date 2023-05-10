export type TCreateCategoryForm = {
  parentId: number | null;
  name: {
    en: string;
    ru: string;
    am: string;
  };
};

export type TCategory = {
  id: string;
  parentId: null;
  createdAt: string;
  updatedAt: string;
  translations: {
    en: {
      name: string;
    };
    ru: {
      name: string;
    };
    am: {
      name: string;
    };
  };
};
