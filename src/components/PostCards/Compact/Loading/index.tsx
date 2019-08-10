import React from 'react';
import {
  PostCardCompactLoadingWrapper,
  PostCardCompactLoadingBar
} from './index.style';

const PostCardCompactLoading = ({
  className = '',
  height = '100%',
  width = '100%'
}: {
  className?: string;
  height?: number | string;
  width?: number | string;
}) => {
  return (
    <PostCardCompactLoadingWrapper
      className={className}
      style={{
        width,
        height
      }}
    >
      <PostCardCompactLoadingBar />

      <PostCardCompactLoadingBar
        style={{
          height: '21px',
          marginTop: '15px',
          width: 'calc(100% - 30px)'
        }}
      />
    </PostCardCompactLoadingWrapper>
  );
};

export default PostCardCompactLoading;
