import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';

import BodyBackground from '@static/styles/BodyBackground';
import Header from '@components/Header';
import HeroSection from './components/HeroSection';
import CategoryPostBlock from './components/CategoryPostBlock';
import HighlightBlock from './components/HighlightBlock';
import { HomeBackground } from './index.style';
import { PostCardList } from '@components/PostCards/List/index.style';
import HomePageSEO from './components/SEO';

const Home = () => {
  return (
    <ScreenClassProvider>
      <BodyBackground>
        <HomePageSEO />

        <Header />
        <HeroSection categoriesExclude={[2, 132, 3, 11, 1]} />

        <Container>
          <HomeBackground>
            <CategoryPostBlock
              categorySlug="noticias"
              sectionTitle="Notícias"
            />

            <CategoryPostBlock categorySlug="reviews" sectionTitle="Reviews" />

            <PostCardList>
              <HighlightBlock
                sectionTitle="Nave Mainha"
                categorySlug="nave-mainha"
              />
              <HighlightBlock sectionTitle="Games" categorySlug="games" />
              <HighlightBlock
                sectionTitle="Controle da Missão"
                categorySlug="controle-missao"
              />
            </PostCardList>
          </HomeBackground>
        </Container>
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Home;
