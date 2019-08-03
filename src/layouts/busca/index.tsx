import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';

import { AppProps } from '@pages/_app';
import BodyBackground from '@static/styles/BodyBackground';
import Header from '@components/Header';
import { SearchPageWrapper, SearchPageTitle } from './index.style';

interface Props extends AppProps {}

const Layout = ({ router }: Props) => {
  const { q } = router.query;

  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />

        <Container>
          <SearchPageWrapper>
            <SearchPageTitle>
              Resultados para sua busca <span>{q}</span>
            </SearchPageTitle>
          </SearchPageWrapper>
        </Container>
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Layout;
