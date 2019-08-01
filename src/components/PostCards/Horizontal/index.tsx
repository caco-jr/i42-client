import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { PostCardHorizontalInterface } from './post-card-horizontal.interface';
import { getPostURL } from '@helpers/urls';
import { handleImageSize } from '@utils/image';
import { handleLimitCharacters, handleDate, decode } from '@helpers/helpers';
import {
  PostCardHorizontalWrapper,
  PostCardHorizontalLeft,
  PostCardHorizontalRight,
  PostCardHorizontalTitle,
  PostCardHorizontalDate,
  PostCardHorizontalImage
} from './index.style';

const PostCardHorizontal = ({
  className = '',
  image,
  slug,
  title,
  date
}: PostCardHorizontalInterface) => {
  const [imageURL, setImageURL] = useState('');

  const link = getPostURL(slug);

  useEffect(() => {
    const width = 120;
    const height = 120;

    setImageURL(handleImageSize(image, width, height));
  }, [image]);

  const componentClassName = 'c-post-card-horizontal';

  return (
    <PostCardHorizontalWrapper>
      <PostCardHorizontalLeft>
        <Link href={link}>
          <a className={`${componentClassName}__image-link`}>
            <PostCardHorizontalImage src={imageURL} alt="" />
          </a>
        </Link>
      </PostCardHorizontalLeft>

      <PostCardHorizontalRight>
        <Link href={link}>
          <a className={`${componentClassName}__link`}>
            <PostCardHorizontalTitle>
              {handleLimitCharacters(decode(title))}
            </PostCardHorizontalTitle>
          </a>
        </Link>

        <PostCardHorizontalDate>{handleDate(date)}</PostCardHorizontalDate>
      </PostCardHorizontalRight>
    </PostCardHorizontalWrapper>
  );
};

export default PostCardHorizontal;
