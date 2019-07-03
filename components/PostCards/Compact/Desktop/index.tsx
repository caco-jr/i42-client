import React, { useState, useEffect, useRef } from 'react';

import { PostCardCompactIterface } from '../post-card-compact.interface';
import { handleImageSize } from '../../../../utils/image';
import { decode, handleLimitCharacters } from '../../../../helpers/helpers';
import { getPostURL } from '../../../../helpers/urls';

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
    <figure ref={ref} className={`${className} ${componentClassName}`}>
      <Link to={link}>
        <img
          alt={title}
          className={`${componentClassName}__image`}
          src={imageURL}
        />

        <div className={`${componentClassName}__mask`} />
      </Link>

      <figcaption className={`${componentClassName}__info`}>
        {categories
          ? categories.map((item, index) => (
              <CategoryLabel id={item.id} name={item.name} key={index} />
            ))
          : null}

        <Link to={link} className={`${componentClassName}__title`}>
          {handleLimitCharacters(decode(title))}
        </Link>
      </figcaption>
    </figure>
  );
};

export default PostCardCompactDesktop;
