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
        <EpisodeParticipantsPerson key={item.id}>
          <span dangerouslySetInnerHTML={{ __html: item.avatar }} />

          <EpisodeParticipantsName>{item.display_name}</EpisodeParticipantsName>
        </EpisodeParticipantsPerson>
      ))}
    </EpisodeParticipantsWrapper>
  );
};

export default EpisodeParticipants;
