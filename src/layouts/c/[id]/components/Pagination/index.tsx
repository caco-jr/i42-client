import React from 'react';
import Link from 'next/link';

import { CategoryPagePaginationWrapper } from './index.style';
import Button from '@components/Button';
import { getCategoryURL } from '@helpers/urls';

interface Props {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
  category: string;
  actualPage: number;
}

const CategoryPagePagination = ({
  hasPreviousPage,
  hasNextPage,
  startCursor,
  endCursor,
  category,
  actualPage
}: Props) => {
  return (
    <CategoryPagePaginationWrapper>
      {actualPage !== 1 && (
        <Link
          href={`${getCategoryURL(category).href}?page=${actualPage -
            1}&before=${startCursor}`}
          as={`${getCategoryURL(category).as}?page=${actualPage -
            1}&before=${startCursor}`}
        >
          <Button
            as="a"
            styleType="outline"
            href={`${getCategoryURL(category).as}?page=${actualPage -
              1}&before=${startCursor}`}
            style={{ marginRight: '15px' }}
          >
            Mais Recente
          </Button>
        </Link>
      )}

      {hasNextPage && (
        <Link
          href={`${getCategoryURL(category).href}?page=${actualPage +
            1}&after=${endCursor}`}
          as={`${getCategoryURL(category).as}?page=${actualPage +
            1}&after=${endCursor}`}
        >
          <Button
            as="a"
            styleType="outline"
            href={`${getCategoryURL(category).as}?page=${actualPage +
              1}&after=${endCursor}`}
          >
            Mais Antigo
          </Button>
        </Link>
      )}
    </CategoryPagePaginationWrapper>
  );
};

export default CategoryPagePagination;
