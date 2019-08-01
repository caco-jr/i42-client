import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';

import BodyBackground from '@static/styles/BodyBackground';
import Header from '@components/Header';

interface Props {}

const Layout = ({  }: Props) => {
  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />

        <Container>
          <span style={{ color: 'var(--text-color)' }}>
            Hello World from __PATH__
          </span>
        </Container>
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Layout;
