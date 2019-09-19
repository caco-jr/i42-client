import React from 'react';
import { Visible, Hidden } from 'react-grid-system';
import gql from 'graphql-tag';

import { PostScreenPodcastHeaderInterface } from './post-screen-podcast-header.interface';
import SvgLoader from '@components/SvgLoader';
import {
  PostScreenPodcastHeaderWrapper,
  PostScreenPodcastHeaderTitle,
  PostScreenPodcastHeaderBox,
  PostScreenPodcastHeaderPlay
} from './index.style';
import Mask from '@components/Mask';
import { Mutation } from 'react-apollo';

const SET_PODCAST_ATTRIBUTE = gql`
  mutation SetPodcastAttribute($src: String) {
    setPodcastAttribute(src: $src) @client
  }
`;

const PostScreenPodcastHeader = ({
  title,
  media,
  podcastSrc
}: PostScreenPodcastHeaderInterface) => {
  const componentClassName = 'post-screen-podcast-header';

  return (
    <PostScreenPodcastHeaderWrapper>
      <Hidden md lg xl>
        <PostScreenPodcastHeaderTitle>{title}</PostScreenPodcastHeaderTitle>
      </Hidden>

      <img src={media.sourceUrl} alt={media.altText} />

      <Visible md lg xl>
        <Mask />
      </Visible>

      <PostScreenPodcastHeaderBox>
        <Visible md lg xl>
          <PostScreenPodcastHeaderTitle>{title}</PostScreenPodcastHeaderTitle>
        </Visible>

        <Mutation mutation={SET_PODCAST_ATTRIBUTE}>
          {setPodcastAttribute => (
            <PostScreenPodcastHeaderPlay
              type="button"
              onClick={() =>
                setPodcastAttribute({ variables: { src: podcastSrc } })
              }
            >
              <SvgLoader
                className={`${componentClassName}__icon`}
                name="play"
              />
            </PostScreenPodcastHeaderPlay>
          )}
        </Mutation>
      </PostScreenPodcastHeaderBox>
    </PostScreenPodcastHeaderWrapper>
  );
};

export default PostScreenPodcastHeader;
