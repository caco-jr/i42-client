import React from 'react';

import Link from 'next/link';

import { CategoryLabelWrapper } from './category-label.style';
import { getCategoryURL } from '../../helpers/urls';

const CategoryLabel = ({ name, id }: { name: string; id: number | string }) => {
  return (
    <Link href={getCategoryURL(`${id}`)}>
      <CategoryLabelWrapper>{name}</CategoryLabelWrapper>
    </Link>
  );
};

export default CategoryLabel;
