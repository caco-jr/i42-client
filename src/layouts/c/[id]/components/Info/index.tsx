import React from 'react';
import gql from 'graphql-tag';
import { Container, Row, Col } from 'react-grid-system';
import { Query } from 'react-apollo';

import {
  CategoryPageInfoTitle,
  CategoryPageInfoDescription
} from './index.style';

const categoryQuery = gql`
  query category($slug: String!) {
    category(slug: $slug) {
      description
    }
  }
`;

interface Props {
  categorySlug: string | string[];
}

const splitDescription = (description: string): string[] =>
  description.split(/<h1>(.*?)<\/h1>/i);

const CategoryPageInfo = ({ categorySlug }: Props) => {
  return (
    <Query query={categoryQuery} variables={{ slug: categorySlug }}>
      {({ loading, data: { category } }) => {
        if (loading) {
          return <h2>Carregando</h2>;
        } else {
          return <Render {...category} />;
        }
      }}
    </Query>
  );
};

const Render = ({ description }: { description: string }) => (
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
    </Row>
  </Container>
);

export default CategoryPageInfo;
