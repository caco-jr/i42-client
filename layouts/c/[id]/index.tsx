import React, { useState, useEffect } from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

import { AppProps } from '@pages/_app';
import BodyBackground from '@components/BodyBackground';
import Header from '@components/Header';
import { CategoryPageWrapper } from './index.style';
import CategoryPagePosts from './components/Posts';
import CategoryPageInfo from './components/Info';
import Pagination from '@components/Pagination';
import { PostCardList } from '@components/PostCards/List/index.style';
import PostCardCompactLoading from '@components/PostCards/Compact/Loading/index';
import Footer from '@components/Footer';

const POSTS_BY_CATEGORY_QUERY = gql`
  query postsByCategory(
    $categorySlug: String
    $before: String
    $after: String
    $first: Int
    $last: Int
  ) {
    posts(
      first: $first
      last: $last
      before: $before
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
  const [categoryPosts, setCategoryPosts] = useState([]);

  const { id, page, before, after } = router.query;

  const categorySlug = Array.isArray(id) ? id[0] : id;
  const categoryPage = page
    ? Array.isArray(page)
      ? parseInt(page[0])
      : parseInt(page)
    : 1;

  const limitPerPage = categoryPage === 1 ? 10 : 9;
  const pagination = before
    ? { last: limitPerPage, before }
    : { first: limitPerPage, after };

  const { loading, error, data } = useQuery(POSTS_BY_CATEGORY_QUERY, {
    variables: {
      categorySlug,
      ...pagination
    }
  });

  useEffect(() => {
    if (!data) {
      return setCategoryPosts([]);
    }

    const othersPost = data.posts.nodes.slice(1);
    const categoryPostsLogic =
      categoryPage === 1 ? othersPost : data.posts.nodes;

    setCategoryPosts(categoryPostsLogic);
  }, [data]);

  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />

        <Container>
          <CategoryPageWrapper>
            <CategoryPageInfo
              categorySlug={categorySlug}
              post={data && data.posts.nodes[0]}
              page={categoryPage}
            />

            {loading && categoryPosts.length ? (
              <Container>
                <PostCardList>
                  {[...Array(9)].map((item, index) => (
                    <PostCardCompactLoading key={index} />
                  ))}
                </PostCardList>
              </Container>
            ) : (
              <CategoryPagePosts posts={categoryPosts} />
            )}

            {data && data.posts ? (
              <Pagination
                {...data.posts.pageInfo}
                category={categorySlug}
                actualPage={categoryPage}
                show={!loading}
              />
            ) : null}
          </CategoryPageWrapper>
        </Container>
      </BodyBackground>

      <Footer />
    </ScreenClassProvider>
  );
};

export default Layout;
