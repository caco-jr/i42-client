import React, { useEffect } from 'react';
import { Container } from 'react-grid-system';
import gql from 'graphql-tag';
import { Query, useQuery } from 'react-apollo';

import { HeroSectionWrapper } from './hero-section.style';
import PostCardCompact from '@components/PostCards/Compact';
import PostCardCompactLoading from '@components/PostCards/Compact/Loading';

const ALL_POSTS_QUERY = gql`
  query allPosts($limit: Int) {
    posts(first: $limit) {
      nodes {
        postId
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
  handlePostsHero
}: {
  handlePostsHero: (categoryIDs: number[]) => void;
}) => {
  const componentClassName = 'hero-section';
  const { loading, error, data } = useQuery(ALL_POSTS_QUERY, {
    variables: { limit: 3 }
  });

  const getHeroPostIDs = (): number[] =>
    data.posts.nodes.map(post => post.postId);

  useEffect(() => {
    !loading && handlePostsHero(getHeroPostIDs());
  }, [loading]);

  return (
    <Container>
      <HeroSectionWrapper>
        {!loading
          ? data &&
            data.posts.nodes.map((post, index) => {
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
              const height = index === 0 ? '495px' : '100%';

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
};

export default HeroSection;
