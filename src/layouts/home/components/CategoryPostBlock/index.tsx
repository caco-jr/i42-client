import React from 'react';
import Link from 'next/link';

import PostCard from '../../../../components/PostCards/Default';
import Button from '../../../../components/Button';
import { CategoryPostInterface } from './category-post.interface';
import { getCategoryURL } from '../../../../helpers/urls';
import PostCardLoading from '../../../../components/PostCards/Default/Loading';

const CategoryPostBlock = ({
  sectionTitle,
  posts,
  categorySlug
}: CategoryPostInterface) => {
  const componentClassName = 'category-post-block';

  return (
    <section className={componentClassName}>
      <h2 className={`${componentClassName}__title`}>{sectionTitle}</h2>

      <section className={`${componentClassName}__container`}>
        {posts.length
          ? posts.map((post, index) => {
              return (
                <PostCard
                  className={`${componentClassName}__post ${componentClassName}__post--${index}`}
                  key={index}
                  image={post.media.medium}
                  title={post.title}
                  content={post.excerpt}
                  slug={post.slug}
                  categories={post.terms!.map(item => ({
                    id: item.term_id,
                    name: item.name
                  }))}
                />
              );
            })
          : [...Array(3)].map((item, index) => <PostCardLoading key={index} />)}
      </section>

      <Link href={getCategoryURL(categorySlug)}>
        <Button className={`${componentClassName}__button`} styleType="outline">
          Mais {sectionTitle}
        </Button>
      </Link>
    </section>
  );
};

export default CategoryPostBlock;
