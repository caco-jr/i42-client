import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { PostCardInterface } from './post-card.interface';
import { getPostURL } from '@helpers/urls';
import { handleImageSize } from '@utils/image';
import CategoryLabel from '@components/CategoryLabel';
import { handleLimitCharacters, decode } from '@helpers/helpers';
import {
  PostCardWrapper,
  PostCardHeader,
  PostCardImage,
  PostCardLink,
  PostCardImageLink,
  PostCardCategories,
  PostCardBody,
  PostCardTitle,
  PostCardContent
} from './index.style';

const PostCard = ({
  className = '',
  media,
  slug,
  title,
  content,
  categories
}: PostCardInterface) => {
  const [imageURL, setImageURL] = useState('');

  const link = getPostURL(slug);

  useEffect(() => {
    const width = 350;
    const height = 220;

    media && setImageURL(handleImageSize(media.sourceUrl, width, height));
  }, [media]);

  return (
    <PostCardWrapper className={className}>
      <PostCardHeader>
        <Link {...link}>
          <PostCardImageLink
            href={link.as}
            aria-label={`Leia mais sobre: ${title}`}
          >
            <PostCardImage src={imageURL} alt={media ? media.altText : ''} />
          </PostCardImageLink>
        </Link>

        <PostCardCategories>
          {categories.nodes.map((category, index) => (
            <CategoryLabel
              key={index}
              name={category.name}
              slug={category.slug}
              color={category.extra.categoryColor}
            />
          ))}
        </PostCardCategories>
      </PostCardHeader>

      <PostCardBody>
        <Link {...link}>
          <PostCardLink href={link.as} aria-label={`Leia mais sobre: ${title}`}>
            <PostCardTitle>
              {handleLimitCharacters(decode(title))}
            </PostCardTitle>
          </PostCardLink>
        </Link>

        {content ? (
          <PostCardContent
            dangerouslySetInnerHTML={{ __html: decode(content) }}
          />
        ) : null}
      </PostCardBody>
    </PostCardWrapper>
  );
};

export default PostCard;
