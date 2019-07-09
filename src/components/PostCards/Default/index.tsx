import React, { useState, useEffect, useRef } from 'react';

import './style.scss';
import { PostCardInterface } from './post-card.interface';
import { handleImageSize } from '../../../utils/image';
import { decode, handleLimitCharacters } from '../../../helpers/helpers';
import { getPostURL } from '../../../helpers/urls';
import CategoryLabel from '../../CategoryLabel';
import Link from 'next/link';

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
                  name={category.name}
                  id={category.id}
                  key={index}
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
