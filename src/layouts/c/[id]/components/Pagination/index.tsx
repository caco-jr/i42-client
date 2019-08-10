import React from 'react';
import Link from 'next/link';

import { CategoryPagePaginationWrapper } from './index.style';
import Button from '@components/Button';
import { getCategoryURL } from '../../../../../helpers/urls';

interface Props {
  actualPage: number;
  category: string;
}

const CategoryPagePagination = ({ actualPage, category }: Props) => {
  return (
    <CategoryPagePaginationWrapper>
      {actualPage !== 1 && (
        <Link
          href={`${getCategoryURL(category).href}?page=${actualPage - 1}`}
          as={`${getCategoryURL(category).as}?page=${actualPage - 1}`}
        >
          <Button
            as="a"
            styleType="outline"
            href={`${getCategoryURL(category).as}?page=${actualPage - 1}`}
            style={{ marginRight: '15px' }}
          >
            Mais Recente
          </Button>
        </Link>
      )}

      <Link
        href={`${getCategoryURL(category).href}?page=${actualPage + 1}`}
        as={`${getCategoryURL(category).as}?page=${actualPage + 1}`}
      >
        <Button
          as="a"
          styleType="outline"
          href={`${getCategoryURL(category).as}?page=${actualPage + 1}`}
        >
          Mais Antigo
        </Button>
      </Link>
    </CategoryPagePaginationWrapper>
  );
};

export default CategoryPagePagination;
