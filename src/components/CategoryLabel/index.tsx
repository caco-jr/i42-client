import React from 'react';

import Link from 'next/link';

import { CategoryLabelWrapper } from './category-label.style';
import { getCategoryURL } from '@helpers/urls';

const CategoryLabel = ({
  name,
  id,
  color
}: {
  name: string;
  id: number | string;
  color: string;
}) => {
  return (
    <Link {...getCategoryURL(`${id}`)}>
      <CategoryLabelWrapper backgroundColor={color}>
        {name}
      </CategoryLabelWrapper>
    </Link>
  );
};

export default CategoryLabel;
