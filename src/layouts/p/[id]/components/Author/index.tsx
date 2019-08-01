import React from 'react';

import { PostAuthorInterface } from './author.interface';
import {
  PostAuthorWrapper,
  PostAuthorImage,
  PostAuthorName,
  PostAuthorTitle
} from './index.style';

const PostAuthor = ({ name, image }: PostAuthorInterface) => {
  return (
    <PostAuthorWrapper>
      <PostAuthorImage src={`${image.split('?')[0]}?s=106&d=mm&r=g`} />

      <figcaption>
        <PostAuthorTitle>Publicado por</PostAuthorTitle>

        <PostAuthorName>{name}</PostAuthorName>
      </figcaption>
    </PostAuthorWrapper>
  );
};

export default PostAuthor;
