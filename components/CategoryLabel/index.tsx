import React from 'react';

import Link from 'next/link';
import { getCategoryURL } from '@helpers/urls';
import { CategoryLabelWrapper } from './category-label.style';

const CategoryLabel = ({ name, id }: { name: string; id: number | string }) => {
  return (
    <Link href={getCategoryURL(`${id}`)}>
      <CategoryLabelWrapper>{name}</CategoryLabelWrapper>
    </Link>
  );
};

export default CategoryLabel;
