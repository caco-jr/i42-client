import React from 'react';

import {
  PostCardLoadingWrapper,
  PostCardLoadingHeader,
  PostCardLoadingHeaderBar,
  PostCardLoadingBar
} from './index.style';

const PostCardLoading = ({ className = '' }) => {
  return (
    <PostCardLoadingWrapper className={className}>
      <PostCardLoadingHeader>
        <PostCardLoadingHeaderBar />
      </PostCardLoadingHeader>

      <PostCardLoadingBar />

      <PostCardLoadingBar />
    </PostCardLoadingWrapper>
  );
};

export default PostCardLoading;
