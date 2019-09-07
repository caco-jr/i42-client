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
      <PostAuthorImage src={image} alt={`Foto do autor, ${name}`} />

      <figcaption>
        <PostAuthorTitle>Publicado por</PostAuthorTitle>

        <PostAuthorName>{name}</PostAuthorName>
      </figcaption>
    </PostAuthorWrapper>
  );
};

export default PostAuthor;
