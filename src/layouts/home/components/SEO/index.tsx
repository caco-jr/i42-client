import React from 'react';
import { NextSeo } from 'next-seo';

const HomePageSEO = () => {
  const config = {
    title: 'Império 42',
    description: ''
  };

  return (
    <NextSeo
      title={config.title}
      description={config.description}
      openGraph={{
        type: 'website',
        title: config.title,
        description: config.description,
        url: '',
        images: [
          {
            url: 'https://www.example.ie/og-image.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt'
          },
          {
            url: 'https://www.example.ie/og-image-2.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt 2'
          }
        ]
      }}
    />
  );
};

export default HomePageSEO;
