import styled from 'styled-components';

export const EpisodeParticipantsWrapper = styled.section`
  img {
    border-radius: 100%;
    height: 60px;
    width: 60px;
  }
`;

export const EpisodeParticipantsTitle = styled.span`
  font-size: 22px;
  font-family: var(--title-font-family);
  margin: 0 0 12px;
  display: inline-block;
`;

export const EpisodeParticipantsPerson = styled.section`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const EpisodeParticipantsName = styled.span`
  margin-left: 20px;
  font-size: 18px;
`;
