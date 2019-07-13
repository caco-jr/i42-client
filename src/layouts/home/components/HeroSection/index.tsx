import React from 'react';
import { Container } from 'react-grid-system';

import { PostWPInterface } from '@interfaces/post/post-wp.interface';
import { HeroSectionWrapper } from './hero-section.style';
import PostCardCompact from '@components/PostCards/Compact';
import PostCardCompactLoading from '@components/PostCards/Compact/Loading';

const HeroSection = ({ posts }: { posts: PostWPInterface[] }) => {
  const componentClassName = 'hero-section';

  return (
    <Container>
      <HeroSectionWrapper>
        {posts.length
          ? posts.map((post, index) => {
              const width = index === 0 ? 735 : 367;
              const height = index === 0 ? 495 : 230;

              return (
                <p>Olá</p>
                // <PostCardCompact
                //   key={index}
                //   className={`${componentClassName}__post`}
                //   width={width}
                //   height={height}
                //   image={post.media.medium}
                //   title={post.title}
                //   slug={post.slug}
                //   categories={post.terms!.map(item => ({
                //     id: item.term_id,
                //     name: item.name
                //   }))}
                // />
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
