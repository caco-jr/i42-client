import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { SearchPagePostsWrapper } from './index.style';
import { PostCardList } from '@components/PostCards/List/index.style';
import PostCard from '@components/PostCards/Default';
import PostCardLoading from '@components/PostCards/Default/Loading';
import Pagination from '@components/Pagination';
import { lazyLoadImages } from '@helpers/LazyLoad/Image';

const searchPostsQuery = gql`
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

  return (
    <SearchPagePostsWrapper>
      <Query
        query={searchPostsQuery}
        variables={{ search: term, ...pagination }}
        onCompleted={() => lazyLoadImages()}
      >
        {({ loading, data: { posts } }) => (
          <>
            <PostCardList>
              {!loading
                ? posts.edges.map((post, index) => {
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
                : [...Array(6)].map((item, index) => (
                    <PostCardLoading key={index} />
                  ))}
            </PostCardList>

            {posts ? (
              <Pagination
                show={!loading}
                {...posts.pageInfo}
                actualPage={actualPage}
              />
            ) : null}
          </>
        )}
      </Query>
    </SearchPagePostsWrapper>
  );
};

export default SearchPagePosts;
