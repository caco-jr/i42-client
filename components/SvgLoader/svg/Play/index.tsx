import React from 'react';

const componentClassName = 'play-icon';

const PlayIcon = ({ width = '21', height = '21', className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${componentClassName} ${className}`}
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path d="M3 22v-20l18 10-18 10z" />
    </svg>
  );
};

export default PlayIcon;
