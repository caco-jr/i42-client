import React from 'react';
import { Visible, Hidden } from 'react-grid-system';

import { PostCardCompactInterface } from './post-card-compact.interface';
import PostCardCompactDesktop from './Desktop';
import PostCardCompactMobile from './Mobile';

const PostCardCompact = ({
  className = '',
  media,
  slug,
  title,
  categories,
  width,
  height
}: PostCardCompactInterface) => {
  return (
    <>
      <Visible md lg xl>
        <PostCardCompactDesktop
          className={`${className}`}
          media={media}
          slug={slug}
          title={title}
          categories={categories}
          width={width}
          height={height}
        />
      </Visible>

      <Hidden md lg xl>
        <PostCardCompactMobile
          className={`${className}`}
          media={media}
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
