import React from 'react';

import { PostAPIInterface } from '@interfaces/post/post.interface';
import PostCardHorizontal from '@components/PostCards/Horizontal';
import { PostCardList } from '@components/PostCards/List/index.style';
import { ReadMoreWrapper } from './index.style';

interface Props {
  posts: PostAPIInterface[];
}

const ReadMore = ({ posts }: Props) => {
  return (
    <ReadMoreWrapper>
      <PostCardList>
        {posts.length
          ? posts.map((post, index) => (
              <PostCardHorizontal
                key={index}
                media={post.featuredImage}
                title={post.title}
                slug={post.slug}
                date={post.date}
              />
            ))
          : null}
      </PostCardList>
    </ReadMoreWrapper>
  );
};

export default ReadMore;
