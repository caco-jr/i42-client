import React from 'react';

import {
  PostCardHorizontalLoadingWrapper,
  PostCardHorizontalLoadingLeft,
  PostCardHorizontalLoadingRight,
  PostCardHorizontalLoadingImage,
  PostCardHorizontalLoadingBar
} from './index.style';

const PostCardHorizontalLoading = ({
  className = ''
}: {
  className?: string;
}) => {
  return (
    <PostCardHorizontalLoadingWrapper className={className}>
      <PostCardHorizontalLoadingLeft>
        <PostCardHorizontalLoadingImage />
      </PostCardHorizontalLoadingLeft>

      <PostCardHorizontalLoadingRight>
        <PostCardHorizontalLoadingBar />

        <PostCardHorizontalLoadingBar
          style={{
            width: 'calc(100% - 60px)',
            marginTop: '7px'
          }}
        />
      </PostCardHorizontalLoadingRight>
    </PostCardHorizontalLoadingWrapper>
  );
};

export default PostCardHorizontalLoading;
