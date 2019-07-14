import React from 'react';
import { ScreenClassProvider } from 'react-grid-system';

import BodyBackground from '@static/styles/BodyBackground';
import Header from '@components/Header';
import HeroSection from './components/HeroSection';

const Home = () => {
  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />
        <HeroSection />
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Home;
