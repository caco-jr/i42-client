import React from 'react';
import Link from 'next/link';

import { PaginationWrapper } from './index.style';
import Button from '@components/Button';
import { getCategoryURL } from '@helpers/urls';
import SvgLoader from '@components/SvgLoader';

interface Props {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
  category: string;
  actualPage: number;
}

const Pagination = ({
  hasPreviousPage,
  hasNextPage,
  startCursor,
  endCursor,
  category,
  actualPage
}: Props) => {
  const componentClassName = 'c-pagination';

  return (
    <PaginationWrapper>
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
            <SvgLoader
              name="arrow"
              className={`${componentClassName}__left-arrow`}
            />
            Anterior
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
            Próximo
            <SvgLoader
              name="arrow"
              className={`${componentClassName}__right-arrow`}
            />
          </Button>
        </Link>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
