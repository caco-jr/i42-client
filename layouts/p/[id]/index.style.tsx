import styled from 'styled-components';

export const PostScreenWrapper = styled.section`
  @media (min-width: 992px) {
    .c-post-screen-header,
    .c-post-screen {
      &__left-column {
        padding-right: 30px !important;
        border-right: 1px solid var(--text-color);
      }

      &__right-column {
        padding-left: 30px !important;
      }
    }
  }
`;
