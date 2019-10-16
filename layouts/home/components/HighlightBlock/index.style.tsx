import styled from 'styled-components';

import { PostCardCompactDesktopImage } from '@components/PostCards/Compact/Desktop/index.style';
import {
  PostCardHorizontalWrapper,
  PostCardHorizontalImage
} from '@components/PostCards/Horizontal/index.style';

export const HighlightBlockWrapper = styled.section`
  border-radius: var(--border-radius);
  position: relative;

  ${PostCardCompactDesktopImage} {
    max-height: 200px;
  }

  ${PostCardHorizontalWrapper} {
    margin: 30px 0;
  }
`;

export const HighlightBlockPostsContainer = styled.section``;
