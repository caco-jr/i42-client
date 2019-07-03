import React from 'react';

import PostCard from '../../Default/index';
import { PostCardCompactIterface } from '../post-card-compact.interface';

const PostCardCompactMobile = ({
  className = '',
  image,
  slug,
  title,
  categories,
  width,
  height
}: PostCardCompactIterface) => {
  const componentClassName = 'post-card-compact-mobile';

  return (
    <section className={`${className} ${componentClassName}`}>
      <PostCard
        className={`${className}__post`}
        image={image}
        title={title}
        slug={slug}
        categories={categories}
      />
    </section>
  );
};

export default PostCardCompactMobile;
