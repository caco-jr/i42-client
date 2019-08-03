import React from 'react';
import gql from 'graphql-tag';
import { Container, Row, Col } from 'react-grid-system';
import { Query } from 'react-apollo';

import {
  CategoryPageInfoTitle,
  CategoryPageInfoDescription,
  CategoryPageInfoWrapper
} from './index.style';
import { PostAPIInterface } from '@interfaces/post/post.interface';
import PostCardCompact from '@components/PostCards/Compact';

const splitDescription = (description: string): string[] =>
  description.split(/<h1>(.*?)<\/h1>/i);

const categoryQuery = gql`
  query category($slug: String!) {
    category(slug: $slug) {
      description
    }
  }
`;

interface Props {
  categorySlug: string | string[];
  post: PostAPIInterface;
}

const CategoryPageInfo = ({ categorySlug, post }: Props) => {
  return (
    <Query query={categoryQuery} variables={{ slug: categorySlug }}>
      {({ loading, data: { category } }) => {
        if (loading) {
          return <h2>Carregando</h2>;
        } else {
          return <Render {...category} post={post} />;
        }
      }}
    </Query>
  );
};

const Render = ({
  description,
  post
}: {
  description: string;
  post: PostAPIInterface;
}) => (
  <CategoryPageInfoWrapper>
    <Container>
      <CategoryPageInfoTitle
        dangerouslySetInnerHTML={{ __html: splitDescription(description)[1] }}
      />

      <Row>
        <Col lg={4}>
          <CategoryPageInfoDescription
            dangerouslySetInnerHTML={{
              __html: splitDescription(description).pop()
            }}
          />
        </Col>

        <Col lg={8}>
          <PostCardCompact
            image={post.media.thumbnail}
            title={post.title}
            slug={post.slug}
            categories={post.categories}
          />
        </Col>
      </Row>
    </Container>
  </CategoryPageInfoWrapper>
);

export default CategoryPageInfo;
