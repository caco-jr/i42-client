import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';
import { AppProps } from '@pages/_app';

import BodyBackground from '@static/styles/BodyBackground';
import Header from '@components/Header';
import { CategoryPageWrapper } from './index.style';

interface Props extends AppProps {}

const Layout = ({  }: Props) => {
  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />

        <Container>
          <CategoryPageWrapper>
            <span style={{ color: 'var(--text-color)' }}>
              Hello World from c/[id]
            </span>
          </CategoryPageWrapper>
        </Container>
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Layout;
