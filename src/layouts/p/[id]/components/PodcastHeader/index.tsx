import React from 'react';
import { Visible, Hidden } from 'react-grid-system';

import { PostScreenPodcastHeaderInterface } from './post-screen-podcast-header.interface';
import SvgLoader from '@components/SvgLoader';
import {
  PostScreenPodcastHeaderWrapper,
  PostScreenPodcastHeaderTitle,
  PostScreenPodcastHeaderBox,
  PostScreenPodcastHeaderPlay
} from './index.style';
import Mask from '@static/styles/Mask';

const PostScreenPodcastHeader = ({
  id,
  title,
  image
}: PostScreenPodcastHeaderInterface) => {
  const componentClassName = 'post-screen-podcast-header';

  const handlePodcastPlay = () => console.log(`Tocar o post: ${id}`);

  return (
    <PostScreenPodcastHeaderWrapper>
      <Hidden md lg xl>
        <PostScreenPodcastHeaderTitle>{title}</PostScreenPodcastHeaderTitle>
      </Hidden>

      <img src={image} alt="" />

      <Visible md lg xl>
        <Mask />
      </Visible>

      <PostScreenPodcastHeaderBox>
        <Visible md lg xl>
          <PostScreenPodcastHeaderTitle>{title}</PostScreenPodcastHeaderTitle>
        </Visible>

        <PostScreenPodcastHeaderPlay type="button" onClick={handlePodcastPlay}>
          <SvgLoader className={`${componentClassName}__icon`} name="play" />
        </PostScreenPodcastHeaderPlay>
      </PostScreenPodcastHeaderBox>
    </PostScreenPodcastHeaderWrapper>
  );
};

export default PostScreenPodcastHeader;
