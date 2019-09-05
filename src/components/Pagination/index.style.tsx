import styled, { css } from 'styled-components';

const componentClassName = '.c-pagination';

interface Props {
  show: boolean;
}

export const PaginationWrapper = styled.section<Props>`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  ${props =>
    props.show
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

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
