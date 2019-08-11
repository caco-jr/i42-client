import React from 'react';
import Link from 'next/link';

import { CategoryPagePaginationWrapper } from './index.style';
import Button from '@components/Button';
import { getCategoryURL } from '@helpers/urls';

interface Props {
  actualPage: number;
  category: string;
  totalPages: number;
}

const CategoryPagePagination = ({
  actualPage,
  totalPages,
  category
}: Props) => {
  console.log(totalPages);

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

      {totalPages !== actualPage && (
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
      )}
    </CategoryPagePaginationWrapper>
  );
};

export default CategoryPagePagination;
