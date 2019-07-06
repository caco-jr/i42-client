import React from 'react';
import styled from 'styled-components';
import { ScreenClassProvider } from 'react-grid-system';

import Header from '@components/Header';
import BodyBackground from '@static/styles/BodyBackground';
import HeroSection from './components/HeroSection';

const Home = () => {
  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />
        {/* <HeroSection /> */}
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Home;
