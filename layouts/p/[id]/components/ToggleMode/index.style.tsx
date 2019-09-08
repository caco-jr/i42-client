import styled from 'styled-components';

const component = '.post-page-toggle-mode';

export const PostPageToggleModeWrapper = styled.span`
  ${component} {
    &__icon {
      margin: 0 0 0 10px;
      transition: 0.3s all ease;
      transform: scale(1);

      * {
        fill: var(--text-color);
      }
    }

    &--light {
      ${component}__icon * {
        fill: var(--text-color);
      }
    }

    &:hover {
      ${component}__icon {
        transform: scale(1.2) rotate(90deg);
      }
    }
  }
`;
