import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

interface Props {
  title: string;
  description: string;
  url: string;
  article: ArticleInterface;
  openGraph: OpenGraphInterface;
}

interface OpenGraphInterface {
  title: string;
  description: string;
  images: ImageInterface[];
}

interface ArticleInterface {
  publishedTime: string;
  modifiedTime: string;
  tags: string[];
  section: string;
  authors: AuthorInterface[];
}

interface AuthorInterface {
  name: string;
  image: string;
}

interface ImageInterface {
  url: string;
  width: number;
  height: number;
  alt: string;
}

const PostPageSEO = ({
  title,
  description,
  url,
  article,
  openGraph
}: Props) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: openGraph.title || title,
          description: openGraph.description || description,
          url,
          type: 'article',
          article: {
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime,
            // expirationTime: '2022-12-21T22:04:11Z',
            section: article.section,
            // authors: [
            //   'https://www.example.com/authors/@firstnameA-lastnameA',
            //   'https://www.example.com/authors/@firstnameB-lastnameB'
            // ],
            tags: article.tags
          },
          images: openGraph.images
        }}
      />

      <ArticleJsonLd
        url={url}
        title={title}
        images={openGraph.images.map(item => item.url)}
        datePublished={article.publishedTime}
        dateModified={article.modifiedTime}
        authorName={article.authors[0].name}
        publisherName={article.authors[0].name}
        publisherLogo={article.authors[0].image}
        description={description}
      />
    </>
  );
};

export default PostPageSEO;
