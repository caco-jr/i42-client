import React from 'react';
import { Container } from 'react-grid-system';
import gql from 'graphql-tag';

import { PostWPInterface } from '@interfaces/post/post-wp.interface';
import { HeroSectionWrapper } from './hero-section.style';
import PostCardCompact from '@components/PostCards/Compact';
import PostCardCompactLoading from '@components/PostCards/Compact/Loading';
import { Query } from 'react-apollo';

export const allPostsQuery = gql`
  query allPosts {
    allPosts {
      title
      media {
        thumbnail
      }
      slug
      categories {
        id
        name
      }
    }
  }
`;

const HeroSection = () => {
  const componentClassName = 'hero-section';

  return (
    <Query query={allPostsQuery}>
      {({ loading, data: { allPosts } }) => {
        return (
          <Container>
            <HeroSectionWrapper>
              {!loading
                ? allPosts.map((post, index) => {
                    const width = index === 0 ? 735 : 367;
                    const height = index === 0 ? 495 : 230;

                    return (
                      <PostCardCompact
                        key={index}
                        className={`${componentClassName}__post`}
                        width={width}
                        height={height}
                        image={post.media.thumbnail}
                        title={post.title}
                        slug={post.slug}
                        categories={post.categories}
                      />
                    );
                  })
                : [...Array(3)].map((item, index) => (
                    <PostCardCompactLoading
                      key={index}
                      className={`${componentClassName}__post ${componentClassName}__post-loading`}
                    />
                  ))}
            </HeroSectionWrapper>
          </Container>
        );
      }}
    </Query>
  );
};

export default HeroSection;
