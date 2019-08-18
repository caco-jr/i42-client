import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { PostCardCompactInterface } from '../post-card-compact.interface';
import { getPostURL } from '@helpers/urls';
import { handleImageSize } from '@utils/image';
import {
  PostCardCompactDesktopWrapper,
  PostCardCompactDesktopImage,
  PostCardCompactDesktopInfo,
  PostCardCompactDesktopTitle
} from './index.style';
import Mask from '@static/styles/Mask';
import CategoryLabel from '@components/CategoryLabel';
import { handleLimitCharacters, decode } from '@helpers/helpers';

const PostCardCompactDesktop = ({
  className = '',
  media,
  slug,
  title,
  categories,
  width,
  height
}: PostCardCompactInterface) => {
  const ref = useRef<HTMLElement>(null);
  const [imageURL, setImageURL] = useState('');

  const link = getPostURL(slug);

  useEffect(() => {
    const postWidth = width ? width : ref.current!.clientWidth;
    const postHeight = height ? height : ref.current!.clientHeight;

    const newHeight = postHeight < 200 ? 450 : postHeight;

    setImageURL(handleImageSize(media.sourceUrl, postWidth, newHeight));
  }, [height, width, media, title]);

  return (
    <PostCardCompactDesktopWrapper ref={ref} className={className}>
      <Link {...link}>
        <a>
          <PostCardCompactDesktopImage alt={media.altText} src={imageURL} />

          <Mask />
        </a>
      </Link>

      <PostCardCompactDesktopInfo>
        {categories
          ? categories.nodes.map((item, index) => (
              <CategoryLabel
                slug={item.slug}
                name={item.name}
                key={index}
                color={item.extra.categoryColor}
              />
            ))
          : null}

        <Link {...link}>
          <PostCardCompactDesktopTitle href={link.as}>
            {handleLimitCharacters(decode(title))}
          </PostCardCompactDesktopTitle>
        </Link>
      </PostCardCompactDesktopInfo>
    </PostCardCompactDesktopWrapper>
  );
};

export default PostCardCompactDesktop;
