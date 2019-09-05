import React from 'react';
import { PodcastPlayerWrapper } from './index.style';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_PODCAST = gql`
  {
    podcast @client {
      src
    }
  }
`;

const PodcastPlayer = () => (
  <Query query={GET_PODCAST}>
    {({ loading, data: { podcast } }) => {
      if (loading) {
        return <section> Carregando... </section>;
      }

      if (!podcast.src) {
        return null;
      }

      return (
        <PodcastPlayerWrapper>
          <iframe
            src={podcast.src}
            scrolling="no"
            width="100%"
            height="138px"
            frameBorder="0"
          />
        </PodcastPlayerWrapper>
      );
    }}
  </Query>
);

export default PodcastPlayer;
