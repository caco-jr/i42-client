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
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Layout;
