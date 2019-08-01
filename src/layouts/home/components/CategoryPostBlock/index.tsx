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

const postsByCategoryQuery = gql`
  query postsByCategory($ID: Int!, $limit: Int!) {
    postsByCategory(ID: $ID, limit: $limit) {
      title
      media {
        thumbnail
      }
      slug
      categories {
        id
        name
        color
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
          <h2 className={`${componentClassName}__title`}>{sectionTitle}</h2>

          <PostCardList>
            {!loading
              ? postsByCategory.map((post, index) => {
                  return (
                    <PostCard
                      className={`${componentClassName}__post ${componentClassName}__post--${index}`}
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

          <Link href={getCategoryURL(categorySlug)}>
            <a className={`${componentClassName}__button`}>
              Mais {sectionTitle}
            </a>
          </Link>
        </CategoryPostBlockWrapper>
      )}
    </Query>
  );
};

export default CategoryPostBlock;
