import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { CategoryPagePostsWrapper } from './index.style';
import { PostCardList } from '@components/PostCards/List/index.style';
import PostCardLoading from '@components/PostCards/Default/Loading';
import PostCardCompact from '@components/PostCards/Compact';

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

interface Props {
  categoryID: number;
}

const CategoryPagePosts = ({ categoryID }: Props) => {
  const POSTS_LIMIT = 9;

  return (
    <CategoryPagePostsWrapper>
      <PostCardList>
        <Query
          query={postsByCategoryQuery}
          variables={{ ID: categoryID, limit: POSTS_LIMIT }}
        >
          {({ loading, data: { postsByCategory } }) =>
            !loading
              ? postsByCategory.map((post, index) => {
                  return (
                    <PostCardCompact
                      key={index}
                      image={post.media.thumbnail}
                      title={post.title}
                      slug={post.slug}
                      categories={post.categories}
                    />
                  );
                })
              : [...Array(POSTS_LIMIT)].map((item, index) => (
                  <PostCardLoading key={index} />
                ))
          }
        </Query>
      </PostCardList>
    </CategoryPagePostsWrapper>
  );
};

export default CategoryPagePosts;
