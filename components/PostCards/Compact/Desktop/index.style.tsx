import styled from 'styled-components';

export const PostCardCompactDesktopWrapper = styled.figure`
  width: 100%;
  line-height: 0;
  position: relative;
  min-height: 200px;
`;

export const PostCardCompactDesktopTitle = styled.a`
  display: block;
  margin-top: 10px;
  height: auto;
  color: #fff;
  font-family: var(--title-font-family);
  font-weight: var(--title-font-weight);
  font-size: 20px;
  line-height: 1.2;
  text-decoration: none;
`;

export const PostCardCompactDesktopInfo = styled.figcaption`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`;

export const PostCardCompactDesktopImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;
