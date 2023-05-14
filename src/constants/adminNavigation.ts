type TAdminNavigation = {
  [key: string]: string;
};

export const AdminNavigation: TAdminNavigation[] = [
  {
    name: 'Category',
    list: '/admin/category/list',
    create: '/admin/category/create',
  },
  {
    name: 'Product',
    list: '/admin/product/list',
    create: '/admin/product/create',
  },
  {
    name: 'Color',
    list: '/admin/color/list',
    create: '/admin/color/create',
  },
];
