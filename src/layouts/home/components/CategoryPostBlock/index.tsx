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

const postsByCategoryQuery = gql`
  query postsByCategory($ID: Int!, $limit: Int!) {
    postsByCategory(ID: $ID, limit: $limit) {
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

const CategoryPostBlock = ({
  sectionTitle,
  categorySlug,
  categoryID
}: CategoryPostInterface) => {
  const componentClassName = 'category-post-block';

  return (
    <Query
      query={postsByCategoryQuery}
      variables={{ ID: categoryID, limit: 3 }}
    >
      {({ loading, data: { postsByCategory } }) => (
        <CategoryPostBlockWrapper>
          <SectionTitle>{sectionTitle}</SectionTitle>

          <PostCardList>
            {!loading
              ? postsByCategory.posts.map((post, index) => {
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
