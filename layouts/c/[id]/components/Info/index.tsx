import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import { Container, Row, Col } from 'react-grid-system';
import { Query, useQuery } from 'react-apollo';

import {
  CategoryPageInfoTitle,
  CategoryPageInfoDescription,
  CategoryPageInfoWrapper,
  CategoryPageInfoPostCardWrapper
} from './index.style';
import { PostAPIInterface } from '@interfaces/post/post.interface';
import PostCardCompact from '@components/PostCards/Compact';
import PostCardCompactLoading from '@components/PostCards/Compact/Loading';
import CategoryPageSEO from '../SEO';
import { getCategoryURL } from '@helpers/urls';

const splitDescription = (description: string): string[] =>
  description.split(/<h1>(.*?)<\/h1>/i);

const CATEGORY_QUERY = gql`
  query category($slug: [String]) {
    categories(where: { slug: $slug }) {
      nodes {
        name
        description
      }
    }
  }
`;

interface Props {
  categorySlug: string | string[];
  post: PostAPIInterface;
  page: number;
}

const CategoryPageInfo = ({ categorySlug, post, page }: Props) => {
  const slug = Array.isArray(categorySlug) ? categorySlug[0] : categorySlug;
  const { loading, error, data } = useQuery(CATEGORY_QUERY, {
    variables: { slug: categorySlug }
  });

  if (loading) {
    return (
      <>
        <CategoryPageSEO
          title={slug}
          description=""
          url={`${getCategoryURL(slug).as}`}
        />

        <h2>Carregando</h2>
      </>
    );
  }

  if (error || !data) {
    return (
      <CategoryPageInfoWrapper>
        <Container>Deu Ruim!</Container>
      </CategoryPageInfoWrapper>
    );
  }

  const { categories } = data;

  const description = categories.nodes.length
    ? categories.nodes[0].description
    : '';

  return (
    <>
      <CategoryPageSEO
        title={categories.nodes[0] ? categories.nodes[0].name : ''}
        description={categories.nodes[0] ? categories.nodes[0].description : ''}
        url={`${getCategoryURL(slug).as}`}
        media={[
          {
            url: post ? post.featuredImage.sourceUrl : '',
            alt: post ? post.featuredImage.altText : ''
          }
        ]}
      />

      <CategoryPageInfoWrapper>
        <Container>
          <CategoryPageInfoTitle
            dangerouslySetInnerHTML={{
              __html: splitDescription(description)[1]
            }}
          />
          {page === 1 && (
            <Row>
              <Col lg={4}>
                <CategoryPageInfoDescription
                  dangerouslySetInnerHTML={{
                    __html: splitDescription(description).pop()
                  }}
                />
              </Col>

              <Col lg={8}>
                <CategoryPageInfoPostCardWrapper>
                  {post ? (
                    <PostCardCompact
                      media={post.featuredImage}
                      title={post.title}
                      slug={post.slug}
                      categories={post.categories}
                    />
                  ) : (
                    <PostCardCompactLoading height="350px" />
                  )}
                </CategoryPageInfoPostCardWrapper>
              </Col>
            </Row>
          )}
        </Container>
      </CategoryPageInfoWrapper>
    </>
  );
};

export default CategoryPageInfo;
