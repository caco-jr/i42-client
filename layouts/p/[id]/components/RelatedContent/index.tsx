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
import { lazyLoadImages } from '@helpers/LazyLoad/Image';

const searchPostsQuery = gql`
  query searchPosts($search: String!, $limit: Int, $exclude: [ID]) {
    posts(where: { search: $search, notIn: $exclude }, first: $limit) {
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

const PostRelatedContent = ({
  postIdExclude,
  title,
  tags,
  categories
}: {
  postIdExclude: number;
  title: string;
  tags: string[];
  categories: string[];
}) => {
  const items = tags.length ? tags : categories;
  const itemSelected = getRandomItem(items);

  return (
    <PostRelatedContentWrapper>
      <PostRelatedContentLine />

      <PostRelatedContentTitle>Conteúdo Relacionado</PostRelatedContentTitle>

      <Query
        query={searchPostsQuery}
        variables={{
          search: itemSelected || title,
          limit: 3,
          exclude: postIdExclude
        }}
        onCompleted={() => lazyLoadImages()}
      >
        {({ loading, data: { posts } }) => {
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
              {posts.nodes.map((post, index) => {
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
              })}
            </PostCardList>
          );
        }}
      </Query>
    </PostRelatedContentWrapper>
  );
};

export default PostRelatedContent;
