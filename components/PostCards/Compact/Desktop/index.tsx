import React, { useState, useEffect, useRef } from 'react';

import { PostCardCompactIterface } from '../post-card-compact.interface';
import Link from 'next/link';
import { getPostURL } from '@helpers/urls';
import { handleImageSize } from '@utils/image';
import CategoryLabel from '@components/CategoryLabel';
import { handleLimitCharacters, decode } from '@helpers/helpers';
import {
  PostCardCompactDesktopWrapper,
  PostCardCompactDesktopTitle,
  PostCardCompactDesktopInfo,
  PostCardCompactDesktopImage
} from './index.style';
import Mask from '@components/Mask';

const PostCardCompactDesktop = ({
  className = '',
  image,
  slug,
  title,
  categories,
  width,
  height
}: PostCardCompactIterface) => {
  const ref = useRef<HTMLElement>(null);
  const [imageURL, setImageURL] = useState('');

  const link = getPostURL(slug);

  useEffect(() => {
    const postWidth = width ? width : ref.current!.clientWidth;
    const postHeight = height ? height : ref.current!.clientHeight;

    const newHeight = postHeight < 200 ? 450 : postHeight;

    setImageURL(handleImageSize(image, postWidth, newHeight));
  }, [height, width, image, title]);

  const componentClassName = 'post-card-compact-desktop';

  return (
    <PostCardCompactDesktopWrapper ref={ref}>
      <Link href={link}>
        <a>
          <PostCardCompactDesktopImage alt={title} src={imageURL} />

          <Mask />
        </a>
      </Link>

      <PostCardCompactDesktopInfo>
        {categories
          ? categories.map((item, index) => (
              <CategoryLabel id={item.id} name={item.name} key={index} />
            ))
          : null}

        <Link href={link}>
          <PostCardCompactDesktopTitle>
            {handleLimitCharacters(decode(title))}
          </PostCardCompactDesktopTitle>
        </Link>
      </PostCardCompactDesktopInfo>
    </PostCardCompactDesktopWrapper>
  );
};

export default PostCardCompactDesktop;
