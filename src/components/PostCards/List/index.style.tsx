import styled from 'styled-components';

export const PostCardList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px 12px;

  @media (max-width: 360px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;
