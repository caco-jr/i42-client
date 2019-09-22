import React from 'react';
import gql from 'graphql-tag';
import { Query, useQuery } from 'react-apollo';

import { SearchPagePostsWrapper } from './index.style';
import { PostCardList } from '@components/PostCards/List/index.style';
import PostCard from '@components/PostCards/Default';
import PostCardLoading from '@components/PostCards/Default/Loading';
import Pagination from '@components/Pagination';

const SEARCH_POSTS_QUERY = gql`
  query searchPosts(
    $search: String
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
      where: { search: $search }
    ) {
      edges {
        cursor
        node {
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
              name
              extra {
                categoryColor
              }
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

interface Props {
  term: string | string[];
  actualPage: number;
  before: string;
  after: string;
}

const SearchPagePosts = ({ term, actualPage, before, after }: Props) => {
  const pagination = before ? { last: 6, before } : { first: 6, after };
  const { loading, error, data } = useQuery(SEARCH_POSTS_QUERY, {
    variables: { search: term, ...pagination }
  });

  return (
    <SearchPagePostsWrapper>
      <PostCardList>
        {!loading
          ? data &&
            data.posts &&
            data.posts.edges.map((post, index) => {
              const {
                title,
                excerpt,
                featuredImage,
                slug,
                categories
              } = post.node;

              return (
                <PostCard
                  key={index}
                  media={featuredImage}
                  title={title}
                  content={excerpt}
                  slug={slug}
                  categories={categories}
                />
              );
            })
          : [...Array(6)].map((item, index) => <PostCardLoading key={index} />)}
      </PostCardList>

      {data && data.posts ? (
        <Pagination
          show={!loading}
          {...data.posts.pageInfo}
          actualPage={actualPage}
        />
      ) : null}
    </SearchPagePostsWrapper>
  );
};

export default SearchPagePosts;
