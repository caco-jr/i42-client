import React from 'react';
import { Container } from 'react-grid-system';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { HeroSectionWrapper } from './hero-section.style';
import PostCardCompact from '@components/PostCards/Compact';
import PostCardCompactLoading from '@components/PostCards/Compact/Loading';

const allPostsQuery = gql`
  query allPosts($categoriesExclude: [ID], $limit: Int) {
    posts(where: { categoryNotIn: $categoriesExclude }, first: $limit) {
      nodes {
        title
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

const HeroSection = ({
  categoriesExclude
}: {
  categoriesExclude: number[];
}) => {
  const componentClassName = 'hero-section';

  return (
    <Query query={allPostsQuery} variables={{ categoriesExclude, limit: 3 }}>
      {({ loading, data: { posts } }) => {
        return (
          <Container>
            <HeroSectionWrapper>
              {!loading
                ? posts.nodes.map((post, index) => {
                    const width = index === 0 ? 735 : 367;
                    const height = index === 0 ? 495 : 300;

                    return (
                      <PostCardCompact
                        key={index}
                        className={`${componentClassName}__post`}
                        width={width}
                        height={height}
                        media={post.featuredImage}
                        title={post.title}
                        slug={post.slug}
                        categories={post.categories}
                      />
                    );
                  })
                : [...Array(3)].map((item, index) => {
                    const height = index === 0 ? 495 : '100%';

                    return (
                      <PostCardCompactLoading
                        key={index}
                        height={height}
                        className={`${componentClassName}__post ${componentClassName}__post-loading`}
                      />
                    );
                  })}
            </HeroSectionWrapper>
          </Container>
        );
      }}
    </Query>
  );
};

export default HeroSection;
