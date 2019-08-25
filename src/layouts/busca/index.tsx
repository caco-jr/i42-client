import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';

import { AppProps } from '@pages/_app';
import BodyBackground from '@static/styles/BodyBackground';
import Header from '@components/Header';
import { SearchPageWrapper, SearchPageTitle } from './index.style';
import SearchPagePosts from './components/Posts';

interface Props extends AppProps {}

const Layout = ({ router }: Props) => {
  const { q, page, before, after } = router.query;

  const actualPage = page
    ? Array.isArray(page)
      ? parseInt(page[0])
      : parseInt(page)
    : 1;

  const beforeTreated = before
    ? Array.isArray(before)
      ? before[0]
      : before
    : null;

  const afterTreated = after ? (Array.isArray(after) ? after[0] : after) : null;

  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />

        <Container>
          <SearchPageWrapper>
            <SearchPageTitle>
              Resultados para sua busca <span>{q}</span>
            </SearchPageTitle>

            <SearchPagePosts
              term={q}
              actualPage={actualPage}
              before={beforeTreated}
              after={afterTreated}
            />
          </SearchPageWrapper>
        </Container>
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Layout;
