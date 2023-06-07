import React from 'react';
import { TLanguageKeys } from '../../../type/language';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useSelectCategories } from '../../../slices/web/categorySlice';
import useChangeRouter from '../../../hooks/useChangeRouter';
import cn from 'classnames';

import styles from '../styles.module.scss';

const CategoryItems = (): JSX.Element => {
  const router = useRouter();
  const categories = useSelector(useSelectCategories);

  const { locale: activeLocale, query } = router;
  const { changeRouter } = useChangeRouter();

  const resolveCategoriesQuery = useCallback(
    (event: React.MouseEvent<HTMLElement>, categoryId: string) => {
      event.stopPropagation();
      event.preventDefault();
      if (query.category) {
        if (
          Array.isArray(query.category) &&
          query.category.includes(categoryId)
        ) {
          const filteredCategories = query.category.filter(
            (id) => id !== categoryId
          );
          changeRouter(filteredCategories, 'category');
        } else {
          if (query.category.includes(categoryId)) {
            changeRouter([], 'category');
          }
        }
        if (!query.category.includes(categoryId)) {
          changeRouter(
            [...(query.category as string[]), categoryId],
            'category'
          );
        }
      } else {
        changeRouter([categoryId], 'category');
      }
    },
    [changeRouter, query.category]
  );

  return (
    <ul className="nav main-navigation collapse in">
      {categories?.map((category, index) => (
        <li
          key={index}
          className={cn({
            [styles.activeItems]: query.category?.includes(String(category.id)),
          })}
        >
          <a
            onClick={(event) =>
              resolveCategoriesQuery(event, String(category.id))
            }
            href="#"
          >
            {category.translations[activeLocale as TLanguageKeys].name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CategoryItems;
