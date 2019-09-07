import React from 'react';
import { NextSeo } from 'next-seo';

const HomePageSEO = () => {
  const config = {
    title: 'Império 42',
    description:
      'Desbrave as novidades da cultura pop e outras coisas nonsenses'
  };

  return (
    <NextSeo
      title={config.title}
      description={config.description}
      openGraph={{
        type: 'website',
        title: config.title,
        description: config.description,
        url: 'https://imperio42.com.br/',
        images: [
          {
            url: '/static/icons/i42.png?v=1.0.0',
            width: 1000,
            height: 1000,
            alt: 'Claudio o macaco'
          }
        ]
      }}
    />
  );
};

export default HomePageSEO;
