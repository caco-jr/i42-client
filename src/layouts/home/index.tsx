import React from 'react';
import { ScreenClassProvider } from 'react-grid-system';

import HeroSection from './components/HeroSection';
import BodyBackground from '../../static/styles/BodyBackground';
import Header from '../../components/Header';

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
