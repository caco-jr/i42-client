import React from 'react';

import './style.scss';

const PostCardHorizontalLoading = ({
  className = ''
}: {
  className?: string;
}) => {
  const componentClassName = 'post-card-horizontal-loading';

  return (
    <section className={`${componentClassName} ${className}`}>
      <section className={`${componentClassName}__left`}>
        <span className={`${componentClassName}__image`} />
      </section>

      <section className={`${componentClassName}__right`}>
        <span className={`${componentClassName}__bar`} />

        <span
          className={`${componentClassName}__bar ${componentClassName}__bar--bottom`}
        />
      </section>
    </section>
  );
};

export default PostCardHorizontalLoading;
