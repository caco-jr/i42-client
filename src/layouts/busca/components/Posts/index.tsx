import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { SearchPagePostsWrapper } from './index.style';
import { PostCardList } from '@components/PostCards/List/index.style';
import PostCard from '@components/PostCards/Default';
import PostCardLoading from '@components/PostCards/Default/Loading';

const searchPostsQuery = gql`
  query searchPosts($search: String) {
    posts(where: { search: $search }) {
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
    }
  }
`;

interface Props {
  term: string | string[];
}

const SearchPagePosts = ({ term }: Props) => {
  return (
    <SearchPagePostsWrapper>
      <Query query={searchPostsQuery} variables={{ search: term }}>
        {({ loading, data: { posts } }) => (
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
              : [...Array(3)].map((item, index) => (
                  <PostCardLoading key={index} />
                ))}
          </PostCardList>
        )}
      </Query>
    </SearchPagePostsWrapper>
  );
};

export default SearchPagePosts;
