import React from 'react';

import { ScreenClassProvider } from 'react-grid-system';
import Header from '@components/Header';
import HeroSection from './components/HeroSection';
import styled from 'styled-components';
import { GlobalStyles } from '@components/GlobalStyles/index';

const Home = () => {
  return (
    <ScreenClassProvider>
      <GlobalStyles>
        <Header />
        {/* <HeroSection /> */}
        <Teste> Olá </Teste>
      </GlobalStyles>
    </ScreenClassProvider>
  );
};

const Teste = styled.h1`
  background: var(--background-color);
  color: var(--text-color);
`;

export default Home;
