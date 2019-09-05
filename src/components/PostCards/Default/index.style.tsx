import styled from 'styled-components';

export const PostCardWrapper = styled.article`
  border-radius: var(--border-radius);
`;

export const PostCardHeader = styled.section`
  position: relative;
  height: 240px;
`;

export const PostCardLink = styled.a`
  text-decoration: none;
  width: 100%;
`;

export const PostCardImage = styled.img`
  width: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  border-radius: var(--border-radius);
  height: 240px;
`;

export const PostCardImageLink = styled.a`
  line-height: 0;
`;

export const PostCardCategories = styled.section`
  position: absolute;
  bottom: 0;
  padding: 5px 10px;
  z-index: 3;
`;

export const PostCardBody = styled.section`
  padding: 20px 0 0;
`;

export const PostCardTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  font-family: var(--title-font-family);
  color: var(--title-color);
`;

export const PostCardContent = styled.section`
  font-size: 18px;
  line-height: 1.33;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 68px;
  color: var(--text-color);
`;
