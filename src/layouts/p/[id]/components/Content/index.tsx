import React from 'react';
import { PostContentWrapper } from './index.style';

const PostContent = ({ content }: { content: string }) => {
  return <PostContentWrapper dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PostContent;
