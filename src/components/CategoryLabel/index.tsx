import React from 'react';

import Link from 'next/link';

import { CategoryLabelWrapper } from './category-label.style';
import { getCategoryURL } from '@helpers/urls';

const CategoryLabel = ({
  name,
  slug,
  color
}: {
  name: string;
  slug: string;
  color: string;
}) => {
  return (
    <Link {...getCategoryURL(`${slug}`)}>
      <CategoryLabelWrapper backgroundColor={color}>
        {name}
      </CategoryLabelWrapper>
    </Link>
  );
};

export default CategoryLabel;
