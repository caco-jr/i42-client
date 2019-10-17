import styled from 'styled-components';

export const SearchPageWrapper = styled.section`
  background-color: var(--background-color);
  padding: 40px 15px;
  border-radius: var(--border-radius);
`;

export const SearchPageTitle = styled.h1`
  margin: 0 0 50px;
  font-size: 22px;
  font-family: var(--title-font-family);
  font-weight: var(--title-font-weight);
  color: var(--text-color);

  span {
    font-style: oblique;
    font-weight: normal;
  }
`;
