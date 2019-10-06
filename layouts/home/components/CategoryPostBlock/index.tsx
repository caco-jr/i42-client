import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';

import { CategoryPostInterface } from './category-post.interface';
import PostCard from '@components/PostCards/Default';
import PostCardLoading from '@components/PostCards/Default/Loading';
import { getCategoryURL } from '@helpers/urls';
import Button from '@components/Button';
import { Query, useQuery } from 'react-apollo';
import { PostCardList } from '@components/PostCards/List/index.style';
import { CategoryPostBlockWrapper } from './index.style';
import SectionTitle from '@components/SectionTitle';

const POSTS_BY_CATEGORY_QUERY = gql`
  query postsByCategory(
    $categorySlug: String
    $first: Int
    $postsExclude: [ID]
  ) {
    posts(
      first: $first
      where: { categoryName: $categorySlug, notIn: $postsExclude }
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
            extra {
              categoryColor
            }
          }
        }
      }
    }
  }
`;

const CategoryPostBlock = ({
  sectionTitle,
  categorySlug,
  postsExclude
}: CategoryPostInterface) => {
  const componentClassName = 'category-post-block';
  const { loading, error, data } = useQuery(POSTS_BY_CATEGORY_QUERY, {
    variables: {
      categorySlug,
      first: 3,
      postsExclude
    }
  });

  return (
    <CategoryPostBlockWrapper>
      <SectionTitle>{sectionTitle}</SectionTitle>

      <PostCardList>
        {!loading && postsExclude.length
          ? data &&
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
            })
          : [...Array(3)].map((item, index) => <PostCardLoading key={index} />)}
      </PostCardList>

      <Link {...getCategoryURL(categorySlug)}>
        <Button
          as="a"
          styleType="outline"
          href={getCategoryURL(categorySlug).as}
        >
          Mais {sectionTitle}
        </Button>
      </Link>
    </CategoryPostBlockWrapper>
  );
};

export default CategoryPostBlock;
