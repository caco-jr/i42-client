import React from 'react';
import Link from 'next/link';

import { PaginationWrapper } from './index.style';
import Button from '@components/Button';
import { getCategoryURL } from '@helpers/urls';
import SvgLoader from '@components/SvgLoader';
import { withRouter, Router } from 'next/router';

interface Props {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
  category?: string;
  actualPage: number;
  router: Router;
}

const Pagination = ({
  hasPreviousPage,
  hasNextPage,
  startCursor,
  endCursor,
  category,
  actualPage,
  router
}: Props) => {
  const componentClassName = 'c-pagination';

  const handleBaseURL = (): { href: string; as: string } => {
    return category
      ? getCategoryURL(category)
      : {
          href: `${router.pathname}?q=${router.query.q}`,
          as: `${router.pathname}?q=${router.query.q}`
        };
  };

  const handleURL = (
    type: 'before' | 'after'
  ): { href: string; as: string } => {
    if (category) {
      return type === 'before'
        ? {
            href: `${handleBaseURL().href}?page=${actualPage -
              1}&before=${startCursor}`,
            as: `${handleBaseURL().as}?page=${actualPage -
              1}&before=${startCursor}`
          }
        : {
            href: `${handleBaseURL().href}?page=${actualPage +
              1}&after=${endCursor}`,
            as: `${handleBaseURL().as}?page=${actualPage +
              1}&after=${endCursor}`
          };
    } else {
      return type === 'before'
        ? {
            href: `${handleBaseURL().href}&page=${actualPage -
              1}&before=${startCursor}`,
            as: `${handleBaseURL().as}&page=${actualPage -
              1}&before=${startCursor}`
          }
        : {
            href: `${handleBaseURL().href}&page=${actualPage +
              1}&after=${endCursor}`,
            as: `${handleBaseURL().as}&page=${actualPage +
              1}&after=${endCursor}`
          };
    }
  };

  return (
    <PaginationWrapper>
      {actualPage !== 1 && (
        <Link href={handleURL('before').href} as={handleURL('before').as}>
          <Button
            as="a"
            styleType="outline"
            href={handleURL('before').as}
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
        <Link href={handleURL('after').href} as={handleURL('after').as}>
          <Button as="a" styleType="outline" href={handleURL('after').as}>
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

export default withRouter(Pagination);
