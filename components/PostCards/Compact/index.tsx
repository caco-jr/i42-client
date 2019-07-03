import React from 'react';

import './style.scss';
import { PostCardCompactIterface } from './post-card-compact.interface';
import PostCardCompactDesktop from './Desktop';
import PostCardCompactMobile from './Mobile';

const PostCardCompact = ({
  className = '',
  image,
  slug,
  title,
  categories,
  width,
  height
}: PostCardCompactIterface) => {
  const showOnlyDesktop = 'd-none d-md-block';

  const showOnlyMobile = 'd-md-none';

  return (
    <>
      <PostCardCompactDesktop
        className={`${className} ${showOnlyDesktop}`}
        image={image}
        slug={slug}
        title={title}
        categories={categories}
        width={width}
        height={height}
      />

      <PostCardCompactMobile
        className={`${className} ${showOnlyMobile}`}
        image={image}
        slug={slug}
        title={title}
        categories={categories}
        width={width}
        height={height}
      />
    </>
  );
};

export default PostCardCompact;
