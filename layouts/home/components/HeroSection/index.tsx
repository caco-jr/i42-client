import React from 'react';

import PostCardCompact from '@components/PostCards/Compact';
import { PostInterface } from '@interfaces/post/post.interface';
import PostCardCompactLoading from '@components/PostCards/Compact/Loading';
import { Container } from 'react-grid-system';
import { HeroSectionWrapper } from './hero-section.style';

const HeroSection = ({ posts }: { posts: PostInterface[] }) => {
  const componentClassName = 'hero-section';

  return (
    <Container>
      <HeroSectionWrapper>
        {posts.length
          ? posts.map((post, index) => {
              const width = index === 0 ? 735 : 367;
              const height = index === 0 ? 495 : 230;

              return (
                <PostCardCompact
                  key={index}
                  className={`${componentClassName}__post`}
                  width={width}
                  height={height}
                  image={post.media.medium}
                  title={post.title}
                  slug={post.slug}
                  categories={post.terms!.map(item => ({
                    id: item.term_id,
                    name: item.name
                  }))}
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
};

export default HeroSection;
