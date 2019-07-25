import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { PostCardInterface } from './post-card.interface';
import { getPostURL } from '@helpers/urls';
import { handleImageSize } from '@utils/image';
import CategoryLabel from '@components/CategoryLabel';
import { handleLimitCharacters, decode } from '@helpers/helpers';

const PostCard = ({
  className = '',
  image,
  slug,
  title,
  content,
  categories
}: PostCardInterface) => {
  const ref = useRef<HTMLElement>(null);
  const [imageURL, setImageURL] = useState('');

  const link = getPostURL(slug);

  useEffect(() => {
    const width = ref.current!.clientWidth;
    const height = ref.current!.clientHeight;

    setImageURL(handleImageSize(image, width, height));
  }, [image]);

  const componentClassName = 'post-card';

  return (
    <article className={`${componentClassName} ${className}`}>
      <section ref={ref} className={`${componentClassName}__header`}>
        <Link href={link}>
          <a className={`${componentClassName}__image-link`}>
            <img
              src={imageURL}
              alt=""
              className={`${componentClassName}__image`}
            />

            <section className={`${componentClassName}__mask-image`} />
          </a>
        </Link>

        <section className={`${componentClassName}__categories`}>
          {categories
            ? categories.map((category, index) => (
                <CategoryLabel
                  key={index}
                  name={category.name}
                  id={category.id}
                  color={category.color}
                />
              ))
            : null}
        </section>
      </section>

      <section className={`${componentClassName}__body`}>
        <Link href={link}>
          <a className={`${componentClassName}__link`}>
            <h3 className={`${componentClassName}__title`}>
              {handleLimitCharacters(decode(title))}
            </h3>
          </a>
        </Link>

        {content ? (
          <section className={`${componentClassName}__content`}>
            <p>{decode(content)} </p>
          </section>
        ) : null}
      </section>
    </article>
  );
};

export default PostCard;
