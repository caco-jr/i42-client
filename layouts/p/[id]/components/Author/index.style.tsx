import styled from 'styled-components';

export const PostAuthorWrapper = styled.figure`
  display: flex;
  margin: 0;
`;

export const PostAuthorImage = styled.img`
  border-radius: 100%;
  margin-right: 25px;
`;

export const PostAuthorTitle = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
  font-family: var(--title-font-family);
  font-weight: var(--title-font-weight);
`;

export const PostAuthorName = styled.p`
  font-size: 18px;
`;
