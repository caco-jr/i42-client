import styled, { keyframes, css } from 'styled-components';

const loaderAnimate = keyframes`
    0% {
        transform: translate3d(-100%, 0, 0);
    }
    100% {
        transform: translate3d(100%, 0, 0);
    }
`;

interface Props {
  height?: string;
  width?: string;
}

export const PostPageLoadingWrapper = styled.section``;

export const PostPageLoadingImage = styled.section<Props>`
  width: 100%;
  background-color: var(--purple);
  border-radius: var(--border-radius);
  display: flex;
  align-items: flex-end;
  padding: 10px;
  position: relative;
  overflow: hidden;
  z-index: 2;
  min-height: 240px;

  &:after {
    content: '';
    background-color: #333;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation-duration: 0.9s;
    animation-iteration-count: infinite;
    animation-name: ${loaderAnimate};
    animation-timing-function: linear;
    background: linear-gradient(
      to right,
      rgba(10, 8, 24, 0) 0%,
      rgba(21, 17, 47, 0.6) 30%,
      rgba(10, 8, 24, 0) 81%
    );
  }

  @media (min-width: 768px) {
    ${props =>
      props.height
        ? css`
            height: ${props.height};
          `
        : css`
            height: 240px;
          `}
  }
`;

export const PostPageLoadingBar = styled.span<Props>`
  display: flex;
  background-color: var(--purple);
  border-radius: 18.4px;
  position: relative;
  overflow: hidden;

  ${props =>
    props.height
      ? css`
          height: ${props.height};
        `
      : css`
          height: 24px;
        `}

  ${props =>
    props.width
      ? css`
          width: ${props.width};
        `
      : css`
          width: 100%;
        `}

  &:after {
    content: '';
    background-color: #333;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation-duration: 0.9s;
    animation-iteration-count: infinite;
    animation-name: ${loaderAnimate};
    animation-timing-function: linear;
    background: linear-gradient(
      to right,
      rgba(10, 8, 24, 0) 0%,
      rgba(10, 8, 24, 0.6) 30%,
      rgba(10, 8, 24, 0) 81%
    );
  }
`;
