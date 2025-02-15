import styled from 'styled-components';

import {
  PostCardCompactDesktopImage,
  PostCardCompactDesktopTitle
} from '@components/PostCards/Compact/Desktop/index.style';

export const CategoryPageInfoWrapper = styled.section`
  font-size: 18px;
  line-height: 1.33;

  ${PostCardCompactDesktopImage} {
    max-height: 425px;
  }

  ${PostCardCompactDesktopTitle} {
    font-size: 30px;
  }
`;

export const CategoryPageInfoTitle = styled.h1`
  color: var(--title-color);
  font-size: 48px;
  margin-bottom: 30px;

  * {
    font-family: var(--primary-font-family-medium);
  }
`;

export const CategoryPageInfoDescription = styled.section`
  color: var(--text-color);
  margin-bottom: 25px;

  h2 {
    margin-bottom: 20px;
    font-size: 20px;
    font-family: var(--title-font-family);
    font-weight: var(--title-font-weight);
  }

  p {
    line-height: 1.33;
    font-size: 18px;
  }
`;

export const CategoryPageInfoPostCardWrapper = styled.section`
  margin-bottom: 55px;
`;
