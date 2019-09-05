import styled from 'styled-components';

import {
  PostCardCompactDesktopTitle,
  PostCardCompactDesktopWrapper
} from '@components/PostCards/Compact/Desktop/index.style';
import { PostCardCompactLoadingWrapper } from '@components/PostCards/Compact/Loading/index.style';

export const HeroSectionWrapper = styled.section`
  display: grid;
  gap: 10px;
  margin-top: 20px;

  ${PostCardCompactDesktopWrapper} {
    min-height: 200px;
    height: 100%;
  }

  ${PostCardCompactDesktopWrapper}:nth-of-type(1) ${PostCardCompactDesktopTitle} {
    font-size: 30px;
    margin-top: 10px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr;

    ${PostCardCompactDesktopWrapper}:nth-of-type(1),
    ${PostCardCompactLoadingWrapper}:nth-of-type(1) {
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    ${PostCardCompactDesktopWrapper}:nth-of-type(1),
    ${PostCardCompactLoadingWrapper}:nth-of-type(1) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;
