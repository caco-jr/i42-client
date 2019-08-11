import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { SearchPagePostsWrapper } from './index.style';
import { PostCardList } from '@components/PostCards/List/index.style';
import PostCard from '@components/PostCards/Default';
import PostCardLoading from '@components/PostCards/Default/Loading';

const searchPostsQuery = gql`
  query searchPosts($term: String!) {
    searchPosts(term: $term) {
      posts {
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
  }
`;

interface Props {
  term: string | string[];
}

const SearchPagePosts = ({ term }: Props) => {
  return (
    <SearchPagePostsWrapper>
      <Query query={searchPostsQuery} variables={{ term }}>
        {({ loading, data: { searchPosts } }) => (
          <PostCardList>
            {!loading
              ? searchPosts.posts.map((post, index) => {
                  return (
                    <PostCard
                      key={index}
                      image={post.media.thumbnail}
                      title={post.title}
                      content={post.excerpt}
                      slug={post.slug}
                      categories={post.categories}
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
