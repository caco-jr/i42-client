import styled from 'styled-components';
import {
  PostCardHorizontalWrapper,
  PostCardHorizontalImage
} from '@components/PostCards/Horizontal/index.style';

export const HighlightBlockWrapper = styled.section`
  padding: 0 0 55px;
  border-radius: var(--border-radius);
  position: relative;

  ${PostCardHorizontalWrapper} {
    margin: 30px 0;
  }

  ${PostCardHorizontalImage} {
    width: 120px;
    height: 120px;
  }
`;

export const HighlightBlockPostsContainer = styled.section``;
