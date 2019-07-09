import React from 'react';

const PostCardCompactLoading = ({
  className = '',
  height = '100%',
  width = '100%'
}: {
  className?: string;
  height?: number | string;
  width?: number | string;
}) => {
  const componentClassName = 'post-card-compact-loading';

  return (
    <section
      className={`${componentClassName} ${className}`}
      style={{
        width,
        height
      }}
    >
      <span className={`${componentClassName}__bar`} />
      <span
        className={`${componentClassName}__bar ${componentClassName}__bar--bottom`}
      />
    </section>
  );
};

export default PostCardCompactLoading;
