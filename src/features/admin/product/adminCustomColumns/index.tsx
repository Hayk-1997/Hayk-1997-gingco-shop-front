import React from 'react';
import { Text } from '@nextui-org/react';

export const productsColumns = {
  id: {
    label: 'Id',
    key: 'id',
    cell: (row: any) => (
      <Text b size={14} css={{ tt: 'capitalize' }}>
        {row.id}
      </Text>
    ),
  },
  'translations.en.name': {
    label: 'Name EN',
    key: 'translations.en.name',
    cell: (row: any) => (
      <Text b size={14} css={{ tt: 'capitalize' }}>
        {row.translations.en.name}
      </Text>
    ),
  },
  'translations.ru.name': {
    label: 'Name RU',
    key: 'translations.ru.name',
    cell: (row: any) => (
      <Text b size={14} css={{ tt: 'capitalize' }}>
        {row.translations.ru.name}
      </Text>
    ),
  },
  'translations.am.name': {
    label: 'Name AM',
    key: 'translations.am.name',
    cell: (row: any) => (
      <Text b size={14} css={{ tt: 'capitalize' }}>
        {row.translations.am.name}
      </Text>
    ),
  },
  actions: {
    label: 'ACTIONS',
    key: 'actions',
  },
};
