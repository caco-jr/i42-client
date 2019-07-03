import React from 'react';

import { ScreenClassProvider } from 'react-grid-system';
import Header from '@components/Header';
import HeroSection from './components/HeroSection';

const Home = () => {
  return (
    <ScreenClassProvider>
      <Header />
      <HeroSection />
    </ScreenClassProvider>
  );
};

export default Home;
