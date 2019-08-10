import React from 'react';
import { PodcastPlayerWrapper } from './index.style';

const PodcastPlayer = ({ src }: { src: string }) => {
  return (
    <PodcastPlayerWrapper>
      <iframe
        src={src}
        scrolling="no"
        width="100%"
        height="138px"
        frameBorder="0"
      />
    </PodcastPlayerWrapper>
  );
};

export default PodcastPlayer;
