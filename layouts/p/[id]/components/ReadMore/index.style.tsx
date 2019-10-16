import styled from 'styled-components';

import { PostCardList } from '@components/PostCards/List/index.style';
import { PostCardHorizontalTitle } from '@components/PostCards/Horizontal/index.style';

export const ReadMoreWrapper = styled.section`
  position: sticky;
  top: 30px;

  ${PostCardList} {
    gap: 30px;
  }

  ${PostCardHorizontalTitle} {
    font-size: 18px;
    line-height: 1.22;
  }
`;
