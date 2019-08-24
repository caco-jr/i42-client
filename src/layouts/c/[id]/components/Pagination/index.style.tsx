import styled from 'styled-components';

const componentClassName = '.category-page-pagination';

export const CategoryPagePaginationWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  ${componentClassName}__right-arrow,
  ${componentClassName}__left-arrow {
    path {
      fill: var(--text-color);
    }
  }

  ${componentClassName}__left-arrow {
    margin-right: 10px;
  }

  ${componentClassName}__right-arrow {
    margin-left: 10px;
    transform: rotate(180deg);
  }
`;
