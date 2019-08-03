import React from 'react';
import { SearchPagePostsWrapper } from './index.style';

interface Props {
  term: string | string[];
}

const SearchPagePosts = ({ term }: Props) => {
  return (
    <SearchPagePostsWrapper>
      <span>{term}</span>
    </SearchPagePostsWrapper>
  );
};

export default SearchPagePosts;
