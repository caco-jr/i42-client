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
  image,
  slug,
  title,
  content,
  categories
}: PostCardInterface) => {
  const [imageURL, setImageURL] = useState('');

  const link = getPostURL(slug);

  useEffect(() => {
    const width = 300;
    const height = 300;

    setImageURL(handleImageSize(image, width, height));
  }, [image]);

  return (
    <PostCardWrapper>
      <PostCardHeader>
        <Link {...link}>
          <PostCardImageLink>
            <PostCardImage src={imageURL} alt="" />
          </PostCardImageLink>
        </Link>

        <PostCardCategories>
          {categories
            ? categories.map((category, index) => (
                <CategoryLabel
                  key={index}
                  name={category.name}
                  slug={category.slug}
                  color={category.color}
                />
              ))
            : null}
        </PostCardCategories>
      </PostCardHeader>

      <PostCardBody>
        <Link {...link}>
          <PostCardLink>
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
