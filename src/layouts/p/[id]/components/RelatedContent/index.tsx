import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { getRandomItem } from '@helpers/helpers';
import {
  PostRelatedContentWrapper,
  PostRelatedContentLine,
  PostRelatedContentTitle
} from './index.style';
import { PostCardList } from '@components/PostCards/List/index.style';
import PostCard from '@components/PostCards/Default';
import PostCardLoading from '@components/PostCards/Default/Loading';

const searchPostsQuery = gql`
  query searchPosts($term: String!, $limit: Int) {
    searchPosts(term: $term, limit: $limit) {
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

const PostRelatedContent = ({
  tags,
  categories
}: {
  tags: string[];
  categories: string[];
}) => {
  let items = tags.length ? tags : categories;
  let itemSelected = getRandomItem(items);

  return (
    <PostRelatedContentWrapper>
      <PostRelatedContentLine />

      <PostRelatedContentTitle>Conteúdo Relacionado</PostRelatedContentTitle>

      <Query
        query={searchPostsQuery}
        variables={{ term: itemSelected, limit: 3 }}
      >
        {({ loading, data: { searchPosts } }) => {
          if (loading) {
            return (
              <PostCardList>
                {[...Array(3)].map((item, index) => (
                  <PostCardLoading key={index} />
                ))}
              </PostCardList>
            );
          }

          return (
            <PostCardList>
              {searchPosts.map((post, index) => (
                <PostCard
                  key={index}
                  image={post.media.thumbnail}
                  title={post.title}
                  content={post.excerpt}
                  slug={post.slug}
                  categories={post.categories}
                />
              ))}
            </PostCardList>
          );
        }}
      </Query>
    </PostRelatedContentWrapper>
  );
};

export default PostRelatedContent;
