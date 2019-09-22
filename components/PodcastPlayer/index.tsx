import React from 'react';
import { PodcastPlayerWrapper } from './index.style';
import gql from 'graphql-tag';
import { Query, useQuery } from 'react-apollo';

const GET_PODCAST_QUERY = gql`
  {
    podcast @client {
      src
    }
  }
`;

const PodcastPlayer = () => {
  const { loading, error, data } = useQuery(GET_PODCAST_QUERY);

  if (loading) {
    return <section> Carregando... </section>;
  }

  if (!data || !data.podcast.src) {
    return null;
  }

  return (
    <PodcastPlayerWrapper>
      <iframe
        src={data.podcast.src}
        scrolling="no"
        width="100%"
        height="138px"
        frameBorder="0"
      />
    </PodcastPlayerWrapper>
  );
};

export default PodcastPlayer;
