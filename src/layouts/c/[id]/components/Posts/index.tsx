import React from 'react';

import { CategoryPagePostsWrapper } from './index.style';
import { PostCardList } from '@components/PostCards/List/index.style';
import PostCardCompact from '@components/PostCards/Compact';
import { PostAPIInterface } from '@interfaces/post/post.interface';

interface Props {
  posts: PostAPIInterface[];
}

const CategoryPagePosts = ({ posts }: Props) => {
  return (
    <CategoryPagePostsWrapper>
      <PostCardList>
        {posts.map((post, index) => (
          <PostCardCompact
            key={index}
            image={post.media.thumbnail}
            title={post.title}
            slug={post.slug}
            categories={post.categories}
          />
        ))}
      </PostCardList>
    </CategoryPagePostsWrapper>
  );
};

export default CategoryPagePosts;
