import React from 'react';

import './style.scss';
import SectionTitle from '../../../../components/SectionTitle';
import PostCard from '../../../../components/PostCards/Default';
import Button from '../../../../components/Button';
import { CategoryPostInterface } from './category-post.interface';
import { withRouter } from 'react-router';
import { getCategoryURL } from '../../../../helpers/urls';
import PostCardLoading from '../../../../components/PostCards/Default/Loading';

const CategoryPostBlock = ({
  sectionTitle,
  posts,
  categorySlug,
  history
}: CategoryPostInterface) => {
  const componentClassName = 'category-post-block';

  const handleButtonClick = () => history.push(getCategoryURL(categorySlug));

  return (
    <section className={componentClassName}>
      <SectionTitle className={`${componentClassName}__title`}>
        {sectionTitle}
      </SectionTitle>

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

      <Button
        onClick={handleButtonClick}
        className={`${componentClassName}__button`}
        styleType="outline"
      >
        Mais {sectionTitle}
      </Button>
    </section>
  );
};

export default withRouter(CategoryPostBlock);
