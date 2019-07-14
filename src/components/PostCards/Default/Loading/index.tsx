import React from 'react';

const PostCardLoading = ({ className = '' }) => {
  const componentClassName = 'post-card-loading';

  return (
    <section className={`${componentClassName} ${className}`}>
      <section className={`${componentClassName}__header`}>
        <span className={`${componentClassName}__header-bar`} />
      </section>

      <span className={`${componentClassName}__bar`} />
      <span
        className={`${componentClassName}__bar ${componentClassName}__bar--bottom`}
      />
    </section>
  );
};

export default PostCardLoading;
