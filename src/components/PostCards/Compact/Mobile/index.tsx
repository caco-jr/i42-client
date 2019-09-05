import React from 'react';

import PostCard from '../../Default/index';
import { PostCardCompactInterface } from '../post-card-compact.interface';

const PostCardCompactMobile = ({
  className = '',
  media,
  slug,
  title,
  categories,
  width,
  height
}: PostCardCompactInterface) => {
  const componentClassName = 'post-card-compact-mobile';

  return (
    <section className={`${className} ${componentClassName}`}>
      <PostCard
        className={`${className}__post`}
        media={media}
        title={title}
        slug={slug}
        categories={categories}
      />
    </section>
  );
};

export default PostCardCompactMobile;
