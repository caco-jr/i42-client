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
  media,
  slug,
  title,
  date
}: PostCardHorizontalInterface) => {
  const [imageURL, setImageURL] = useState('');

  const link = getPostURL(slug);

  useEffect(() => {
    const width = 120;
    const height = 120;

    setImageURL(handleImageSize(media.sourceUrl, width, height));
  }, [media]);

  const componentClassName = 'c-post-card-horizontal';

  return (
    <PostCardHorizontalWrapper className={className}>
      <PostCardHorizontalLeft>
        <Link {...link}>
          <a className={`${componentClassName}__image-link`}>
            <PostCardHorizontalImage src={imageURL} alt={media.altText} />
          </a>
        </Link>
      </PostCardHorizontalLeft>

      <PostCardHorizontalRight>
        <Link {...link}>
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
