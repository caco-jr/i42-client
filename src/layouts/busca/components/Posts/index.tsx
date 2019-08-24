import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { SearchPagePostsWrapper } from './index.style';
import { PostCardList } from '@components/PostCards/List/index.style';
import PostCard from '@components/PostCards/Default';
import PostCardLoading from '@components/PostCards/Default/Loading';
import Pagination from '@components/Pagination';

const searchPostsQuery = gql`
  query searchPosts($search: String, $before: String, $after: String) {
    posts(
      where: { search: $search }
      first: 6
      before: $before
      after: $after
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
            name
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

interface Props {
  term: string | string[];
  actualPage: number;
  before: string;
  after: string;
}

const SearchPagePosts = ({ term, actualPage, before, after }: Props) => {
  return (
    <SearchPagePostsWrapper>
      <Query
        query={searchPostsQuery}
        variables={{ search: term, before, after }}
      >
        {({ loading, data: { posts } }) => (
          <>
            <PostCardList>
              {!loading
                ? posts.nodes.map((post, index) => {
                    const {
                      title,
                      excerpt,
                      featuredImage,
                      slug,
                      categories
                    } = post;

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

            {!loading && (
              <Pagination {...posts.pageInfo} actualPage={actualPage} />
            )}
          </>
        )}
      </Query>
    </SearchPagePostsWrapper>
  );
};

export default SearchPagePosts;
