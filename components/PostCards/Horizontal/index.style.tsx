import styled from 'styled-components';

export const PostCardHorizontalWrapper = styled.article`
  display: flex;

  a {
    text-decoration: none;
    color: var(--title-color);
  }
`;

export const PostCardHorizontalLeft = styled.section``;

export const PostCardHorizontalRight = styled.section`
  margin-left: 12px;
  flex: 1;
`;

export const PostCardHorizontalTitle = styled.h3`
  font-size: 20px;
  font-family: var(--title-font-family);
  font-weight: var(--title-font-weight);
  line-height: 1.4;
  margin-bottom: 10px;
`;

export const PostCardHorizontalDate = styled.span`
  display: block;
  color: var(--text-color);
`;

export const PostCardHorizontalImage = styled.img`
  object-fit: cover;
  width: 120px;
  height: 120px;
`;
