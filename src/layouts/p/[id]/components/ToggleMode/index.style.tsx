import styled from 'styled-components';

const component = '.post-page-toggle-mode';

export const PostPageToggleModeWrapper = styled.span`
  ${component} {
    color: var(--text-color);

    &__icon {
      margin: 0 0 0 10px;

      * {
        fill: var(--text-color);
      }
    }

    &--light {
      ${component}__icon * {
        fill: var(--text-color);
      }
    }
  }
`;
