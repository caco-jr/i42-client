import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { AppProps } from '@pages/_app';
import BodyBackground from '@static/styles/BodyBackground';
import Header from '@components/Header';
import { CategoryPageWrapper } from './index.style';
import CategoryPagePosts from './components/Posts';
import { getCategoryIDBySlug } from '@helpers/category';
import CategoryPageInfo from './components/Info';
import CategoryPagePagination from './components/Pagination';

const postsByCategoryQuery = gql`
  query postsByCategory($ID: Int!, $limit: Int!, $page: Int) {
    postsByCategory(ID: $ID, limit: $limit, page: $page) {
      title
      excerpt
      media {
        thumbnail
      }
      slug
      categories {
        slug
        name
        color
      }
    }
  }
`;

interface Props extends AppProps {}

const Layout = ({ router }: Props) => {
  const { id, page } = router.query;

  const categoryID = getCategoryIDBySlug(id);
  const categorySlug = Array.isArray(id) ? id[0] : id;
  const categoryPage = page
    ? Array.isArray(page)
      ? parseInt(page[0])
      : parseInt(page)
    : 1;

  const limitPerPage = categoryPage === 1 ? 10 : 9;

  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />

        <Container>
          <CategoryPageWrapper>
            <Query
              query={postsByCategoryQuery}
              variables={{
                ID: categoryID,
                limit: limitPerPage,
                page: categoryPage
              }}
            >
              {({ loading, data: { postsByCategory } }) => {
                if (loading) {
                  return <h2>Carregando</h2>;
                }

                const firstPost = postsByCategory[0];
                const othersPost = postsByCategory.slice(1);
                const posts = categoryPage === 1 ? othersPost : postsByCategory;

                return (
                  <>
                    <CategoryPageInfo
                      categorySlug={categorySlug}
                      post={firstPost}
                      page={categoryPage}
                    />

                    <CategoryPagePosts posts={posts} />

                    <CategoryPagePagination
                      actualPage={categoryPage}
                      category={categorySlug}
                    />
                  </>
                );
              }}
            </Query>
          </CategoryPageWrapper>
        </Container>
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Layout;
