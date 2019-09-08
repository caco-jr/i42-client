import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';

import { CategoryPostInterface } from './category-post.interface';
import PostCard from '@components/PostCards/Default';
import PostCardLoading from '@components/PostCards/Default/Loading';
import { getCategoryURL } from '@helpers/urls';
import Button from '@components/Button';
import { Query } from 'react-apollo';
import { PostCardList } from '@components/PostCards/List/index.style';
import { CategoryPostBlockWrapper } from './index.style';
import SectionTitle from '@components/SectionTitle';
import { lazyLoadImages } from '@helpers/LazyLoad/Image';

const postsByCategoryQuery = gql`
  query postsByCategory($categorySlug: String, $first: Int) {
    posts(first: $first, where: { categoryName: $categorySlug }) {
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
  categorySlug
}: CategoryPostInterface) => {
  const componentClassName = 'category-post-block';

  return (
    <Query
      query={postsByCategoryQuery}
      variables={{
        categorySlug,
        first: 3
      }}
      onCompleted={() => lazyLoadImages()}
    >
      {({ loading, data: { posts } }) => (
        <CategoryPostBlockWrapper>
          <SectionTitle>{sectionTitle}</SectionTitle>

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
      )}
    </Query>
  );
};

export default CategoryPostBlock;
