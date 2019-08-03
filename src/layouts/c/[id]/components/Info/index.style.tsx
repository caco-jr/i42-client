import styled from 'styled-components';

export const CategoryPageInfoWrapper = styled.section`
  margin-bottom: 55px;
  font-size: 18px;
  line-height: 1.33;
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
  }

  p {
    line-height: 1.33;
    font-size: 18px;
  }
`;
