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

const postsByCategoryQuery = gql`
  query postsByCategory($ID: Int!, $limit: Int!) {
    postsByCategory(ID: $ID, limit: $limit) {
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
  const { id } = router.query;
  const categoryID = getCategoryIDBySlug(id);
  const categorySlug = id;

  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />

        <Container>
          <CategoryPageWrapper>
            <Query
              query={postsByCategoryQuery}
              variables={{ ID: categoryID, limit: 10 }}
            >
              {({ loading, data: { postsByCategory } }) => {
                if (loading) {
                  return <h2>Carregando</h2>;
                }

                const firstPost = postsByCategory[0];
                const othersPost = postsByCategory.slice(1);

                return (
                  <>
                    <CategoryPageInfo
                      categorySlug={categorySlug}
                      post={firstPost}
                    />

                    <CategoryPagePosts posts={othersPost} />
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
