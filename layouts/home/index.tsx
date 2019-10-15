import React, { useEffect, useState } from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';

import BodyBackground from '@components/BodyBackground';
import Header from '@components/Header';
import HeroSection from './components/HeroSection';
import CategoryPostBlock from './components/CategoryPostBlock';
import HighlightBlock from './components/HighlightBlock';
import { HomeBackground } from './index.style';
import { PostCardList } from '@components/PostCards/List/index.style';
import HomePageSEO from './components/SEO';
import Footer from '@components/Footer';

const Home = () => {
  const [postsExclude, setPostsExclude] = useState([]);

  const handlePostsExclude = (postIDs: number[]) => {
    setPostsExclude(postIDs);
  };

  return (
    <ScreenClassProvider>
      <BodyBackground>
        <HomePageSEO />

        <Header />
        <HeroSection handlePostsHero={handlePostsExclude} />

        <Container>
          <HomeBackground>
            <CategoryPostBlock
              categorySlug="noticias"
              title={{
                normal: 'Império',
                highlighted: 'news',
                color: '#f42458'
              }}
              postsExclude={postsExclude}
              postQuantity={6}
            />

            <CategoryPostBlock
              categorySlug="imperialista"
              title={{
                normal: 'Imperia',
                highlighted: 'lista',
                color: '#6638ed'
              }}
              postsExclude={postsExclude}
              postQuantity={3}
            />

            <PostCardList>
              <HighlightBlock
                sectionTitle="Nave Mainha"
                categorySlug="nave-mainha"
                postsExclude={postsExclude}
              />
              <HighlightBlock
                sectionTitle="Games"
                categorySlug="games"
                postsExclude={postsExclude}
              />

              <HighlightBlock
                sectionTitle="Controle da Missão"
                categorySlug="controle-missao"
                postsExclude={postsExclude}
              />
            </PostCardList>
          </HomeBackground>
        </Container>
      </BodyBackground>

      <Footer />
    </ScreenClassProvider>
  );
};

export default Home;
