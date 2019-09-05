import React, { useState } from 'react';
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
  show?: boolean;
}

const Pagination = ({
  hasPreviousPage,
  hasNextPage,
  startCursor,
  endCursor,
  category,
  actualPage,
  router,
  show = true
}: Props) => {
  const componentClassName = 'c-pagination';
  const [before, setBefore] = useState('');
  const [lastPostID, setLastPostID] = useState('');

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
    const beforePage =
      before || before === null ? `after=${before}` : `before=${startCursor}`;

    if (category) {
      return type === 'before'
        ? {
            href: `${handleBaseURL().href}?page=${actualPage -
              1}&${beforePage}`,
            as: `${handleBaseURL().as}?page=${actualPage - 1}&${beforePage}`
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
              1}&${beforePage}`,
            as: `${handleBaseURL().as}&page=${actualPage - 1}&${beforePage}`
          }
        : {
            href: `${handleBaseURL().href}&page=${actualPage +
              1}&after=${endCursor}`,
            as: `${handleBaseURL().as}&page=${actualPage +
              1}&after=${endCursor}`
          };
    }
  };

  const handleBefore = (isPrevious: boolean) => {
    if (lastPostID) {
      actualPage === 1 || (actualPage === 3 && isPrevious)
        ? setBefore(null)
        : setBefore(lastPostID);
    } else {
      actualPage === 1 || (actualPage === 3 && isPrevious)
        ? setBefore(null)
        : setBefore(startCursor);
    }

    setLastPostID(endCursor);
  };

  return (
    <PaginationWrapper show={show}>
      {actualPage !== 1 && (
        <Link href={handleURL('before').href} as={handleURL('before').as}>
          <Button
            as="a"
            styleType="outline"
            href={handleURL('before').as}
            style={{ marginRight: '15px' }}
            onClick={() => handleBefore(true)}
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
          <Button
            as="a"
            styleType="outline"
            href={handleURL('after').as}
            onClick={() => handleBefore(false)}
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

export default withRouter(Pagination);
