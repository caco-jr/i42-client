import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';
import { AppProps } from '@pages/_app';

import BodyBackground from '@static/styles/BodyBackground';
import Header from '@components/Header';
import { CategoryPageWrapper } from './index.style';
import CategoryPagePosts from './components/Posts';
import { getCategoryIDBySlug } from '@helpers/categories';

interface Props extends AppProps {}

const Layout = ({ router }: Props) => {
  const { id } = router.query;
  const categoryID = getCategoryIDBySlug(id);

  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />

        <Container>
          <CategoryPageWrapper>
            <span style={{ color: 'var(--text-color)' }}>
              Hello World from c/[id]
            </span>

            <CategoryPagePosts categoryID={categoryID} />
          </CategoryPageWrapper>
        </Container>
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Layout;
