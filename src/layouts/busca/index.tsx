import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';

import { AppProps } from '@pages/_app';
import BodyBackground from '@static/styles/BodyBackground';
import Header from '@components/Header';
import { SearchPageWrapper } from './index.style';

interface Props extends AppProps {}

const Layout = ({ router }: Props) => {
  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />

        <Container>
          <SearchPageWrapper>
            <span style={{ color: 'var(--text-color)' }}>
              Hello World from busca
            </span>
          </SearchPageWrapper>
        </Container>
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Layout;
