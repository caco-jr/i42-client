import React from 'react';

import { HighlightBlockInterface } from './highlight-block.interface';
import PostCardCompact from '@components/PostCards/Compact';
import PostCardHorizontal from '@components/PostCards/Horizontal';
import PostCardCompactLoading from '@components/PostCards/Compact/Loading';
import PostCardHorizontalLoading from '@components/PostCards/Horizontal/Loading';

const HighlightBlock = (props: HighlightBlockInterface) => {
  const componentClassName = 'highlight-block';

  const { posts, sectionTitle } = props;

  return (
    <section className={componentClassName}>
      <h2 className={`${componentClassName}__title`}>{sectionTitle}</h2>

      {/* <section className={`${componentClassName}__posts-container`}>
        {posts.length
          ? posts.map((post, index) => {
              if (index === 0) {
                return (
                  <PostCardCompact
                    key={index}
                    className={`${componentClassName}__post-large`}
                    image={post.media.medium}
                    title={post.title}
                    slug={post.slug}
                    categories={post.terms!.map(item => ({
                      id: item.term_id,
                      name: item.name
                    }))}
                  />
                );
              } else {
                return (
                  <PostCardHorizontal
                    className={`${componentClassName}__post`}
                    key={index}
                    image={post.media.medium}
                    title={post.title}
                    slug={post.slug}
                    date={post.date}
                  />
                );
              }
            })
          : [...Array(3)].map((item, index) => {
              if (index === 0) {
                return (
                  <PostCardCompactLoading
                    key={index}
                    className={`${componentClassName}__post ${componentClassName}__post-loading`}
                  />
                );
              } else {
                return (
                  <PostCardHorizontalLoading
                    key={index}
                    className={`${componentClassName}__post ${componentClassName}__post-horizontal-loading`}
                  />
                );
              }
            })}
      </section> */}
    </section>
  );
};

export default HighlightBlock;
