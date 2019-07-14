import React from 'react';
import { Visible, Hidden } from 'react-grid-system';

import { PostCardCompactInterface } from './post-card-compact.interface';
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
}: PostCardCompactInterface) => {
  return (
    <>
      <Visible lg xl>
        <PostCardCompactDesktop
          className={`${className}`}
          image={image}
          slug={slug}
          title={title}
          categories={categories}
          width={width}
          height={height}
        />
      </Visible>

      <Hidden lg xl>
        <PostCardCompactMobile
          className={`${className}`}
          image={image}
          slug={slug}
          title={title}
          categories={categories}
          width={width}
          height={height}
        />
      </Hidden>
    </>
  );
};

export default PostCardCompact;
