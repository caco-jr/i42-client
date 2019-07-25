import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';

import BodyBackground from '@static/styles/BodyBackground';
import Header from '@components/Header';
import HeroSection from './components/HeroSection';
import CategoryPostBlock from './components/CategoryPostBlock';
import HighlightBlock from './components/HighlightBlock';
import { HomeBackground } from './index.style';

const Home = () => {
  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />
        <HeroSection categoriesExclude={[2, 132, 3, 11, 1]} />

        <Container>
          <HomeBackground>
            <CategoryPostBlock
              categoryID={2}
              categorySlug="noticias-cinema"
              sectionTitle="Notícias"
            />

            <CategoryPostBlock
              categoryID={132}
              categorySlug="reviews-cinema"
              sectionTitle="Reviews"
            />

            <HighlightBlock sectionTitle="Nave Mainha" categoryID={3} />
            <HighlightBlock sectionTitle="Games" categoryID={11} />
            <HighlightBlock sectionTitle="Controle da Missão" categoryID={1} />
          </HomeBackground>
        </Container>
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Home;
