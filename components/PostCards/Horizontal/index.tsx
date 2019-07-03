import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import { PostCardHorizontalInterface } from './post-card-horizontal.interface';
import { getPostURL } from '../../../helpers/urls';
import { handleImageSize } from '../../../utils/image';
import {
  handleLimitCharacters,
  decode,
  handleDate
} from '../../../helpers/helpers';

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
    <article className={`${componentClassName} ${className}`}>
      <section className={`${componentClassName}__left`}>
        <Link to={link} className={`${componentClassName}__image-link`}>
          <img
            src={imageURL}
            alt=""
            className={`${componentClassName}__image`}
          />
        </Link>
      </section>

      <section className={`${componentClassName}__right`}>
        <Link to={link} className={`${componentClassName}__link`}>
          <h3 className={`${componentClassName}__title`}>
            {handleLimitCharacters(decode(title))}
          </h3>
        </Link>

        <span className={`${componentClassName}__date`}>
          {handleDate(date)}
        </span>
      </section>
    </article>
  );
};

export default PostCardHorizontal;
