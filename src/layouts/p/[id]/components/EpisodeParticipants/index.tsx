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
        <EpisodeParticipantsPerson key={item.ID}>
          <span dangerouslySetInnerHTML={{ __html: item.user_avatar }} />

          <EpisodeParticipantsName>{item.display_name}</EpisodeParticipantsName>
        </EpisodeParticipantsPerson>
      ))}
    </EpisodeParticipantsWrapper>
  );
};

export default EpisodeParticipants;
