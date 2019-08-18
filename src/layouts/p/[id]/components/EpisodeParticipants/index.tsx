import React from 'react';

import { EpisodeParticipantsInterface } from './episode-participants.interface';
import {
  EpisodeParticipantsWrapper,
  EpisodeParticipantsTitle,
  EpisodeParticipantsPerson,
  EpisodeParticipantsName
} from './index.style';

const EpisodeParticipants = ({
  episodeParticipants
}: EpisodeParticipantsInterface) => {
  return (
    <EpisodeParticipantsWrapper>
      <EpisodeParticipantsTitle>Participantes</EpisodeParticipantsTitle>

      {episodeParticipants.map(item => (
        <EpisodeParticipantsPerson key={item.userId}>
          <img src={item.avatar.url} />

          <EpisodeParticipantsName>{item.name}</EpisodeParticipantsName>
        </EpisodeParticipantsPerson>
      ))}
    </EpisodeParticipantsWrapper>
  );
};

export default EpisodeParticipants;
