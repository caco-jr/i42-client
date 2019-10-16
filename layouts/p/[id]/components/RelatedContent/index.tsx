import React from 'react';
import gql from 'graphql-tag';
import { Query, useQuery } from 'react-apollo';

import { getRandomItem } from '@helpers/helpers';
import {
  PostRelatedContentWrapper,
  PostRelatedContentTitle
} from './index.style';
import { PostCardList } from '@components/PostCards/List/index.style';
import PostCard from '@components/PostCards/Default';
import PostCardLoading from '@components/PostCards/Default/Loading';

const SEARCH_POSTS_QUERY = gql`
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
  const { loading, error, data } = useQuery(SEARCH_POSTS_QUERY, {
    variables: {
      search: itemSelected || title,
      limit: 3,
      exclude: postIdExclude
    }
  });

  if (loading) {
    return (
      <PostRelatedContentWrapper>
        <PostRelatedContentTitle>Conteúdo Relacionado</PostRelatedContentTitle>
        <PostCardList>
          {[...Array(3)].map((item, index) => (
            <PostCardLoading key={index} />
          ))}
        </PostCardList>
      </PostRelatedContentWrapper>
    );
  }

  if (!data || !data.posts.nodes.length) {
    return null;
  }

  return (
    <PostRelatedContentWrapper>
      <PostRelatedContentTitle>Conteúdo Relacionado</PostRelatedContentTitle>

      <PostCardList>
        {data &&
          data.posts.nodes.map((post, index) => {
            const { title, excerpt, featuredImage, slug, categories } = post;

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
    </PostRelatedContentWrapper>
  );
};

export default PostRelatedContent;
