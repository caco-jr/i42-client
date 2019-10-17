import React from 'react';

import SvgLoader from '@components/SvgLoader';
import { RatingWrapper } from './index.style';

const Rating = ({ rating }: { rating: number }) => {
  const componentClassName = 'c-rating';
  const totalRating = 5;

  return (
    <RatingWrapper>
      {[...Array(totalRating)].map((item, index) => {
        const isActive = index + 1 <= rating ? `active` : `inactive`;

        return (
          <SvgLoader
            name="planet"
            key={index}
            className={`${componentClassName}__icon ${componentClassName}__icon--${isActive}`}
          />
        );
      })}
    </RatingWrapper>
  );
};

export default Rating;
