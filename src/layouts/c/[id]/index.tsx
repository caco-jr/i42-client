import React, { useState } from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { AppProps } from '@pages/_app';
import BodyBackground from '@static/styles/BodyBackground';
import Header from '@components/Header';
import { CategoryPageWrapper } from './index.style';
import CategoryPagePosts from './components/Posts';
import CategoryPageInfo from './components/Info';
import CategoryPagePagination from './components/Pagination';
import { PostCardList } from '@components/PostCards/List/index.style';
import PostCardCompactLoading from '@components/PostCards/Compact/Loading/index';

const postsByCategoryQuery = gql`
  query postsByCategory($categorySlug: String, $first: Int, $after: String) {
    posts(
      first: $first
      after: $after
      where: { categoryName: $categorySlug }
    ) {
      nodes {
        title
        excerpt
        featuredImage {
          sourceUrl
          altText
        }
        slug
        categories {
          nodes {
            slug
            name
            count
            extra {
              categoryColor
            }
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;

interface Props extends AppProps {}

const Layout = ({ router }: Props) => {
  const [posts, setPosts] = useState([]);

  const { id, page, before, after } = router.query;

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
            <CategoryPageInfo
              categorySlug={categorySlug}
              post={posts[0]}
              page={categoryPage}
            />

            <Query
              query={postsByCategoryQuery}
              variables={{
                categorySlug,
                first: limitPerPage,
                before,
                after
              }}
            >
              {({ loading, data: { posts } }) => {
                if (loading) {
                  return (
                    <Container>
                      <PostCardList>
                        {[...Array(9)].map((item, index) => (
                          <PostCardCompactLoading key={index} />
                        ))}
                      </PostCardList>
                    </Container>
                  );
                }

                setPosts(posts.nodes);

                const othersPost = posts.nodes.slice(1);

                const categoryPosts =
                  categoryPage === 1 ? othersPost : posts.nodes;

                return (
                  <>
                    <CategoryPagePosts posts={categoryPosts} />

                    <CategoryPagePagination
                      {...posts.pageInfo}
                      category={categorySlug}
                      actualPage={categoryPage}
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
