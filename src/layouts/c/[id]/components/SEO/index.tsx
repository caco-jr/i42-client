import React from 'react';
import { NextSeo } from 'next-seo';
import { handleImageSize } from '@utils/image';

interface Props {
  title: string;
  description: string;
  url: string;
  media?: MediaInterface[];
}

interface MediaInterface {
  url: string;
  alt: string;
}

const mediaDefault: MediaInterface[] = [
  {
    url: '',
    alt: ''
  }
];

const CategoryPageSEO = ({
  title,
  description,
  url,
  media = mediaDefault
}: Props) => {
  return (
    <NextSeo
      title={`${title} - Império 42`}
      description={description}
      openGraph={{
        type: 'website',
        title,
        description,
        url,
        images: media.map(item => ({
          url: handleImageSize(item.url, 800, 600),
          alt: item.alt,
          width: 800,
          height: 600
        }))
      }}
    />
  );
};

export default CategoryPageSEO;
