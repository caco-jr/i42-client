import styled, { keyframes } from 'styled-components';

const loaderAnimate = keyframes`
    0% {
        transform: translate3d(-100%, 0, 0);
    }
    100% {
        transform: translate3d(100%, 0, 0);
    }
`;

export const PostCardCompactLoadingWrapper = styled.section`
  display: flex;
  background-color: var(--purple);
  border-radius: var(--border-radius);
  justify-content: flex-end;
  padding: 30px;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  max-width: 100%;
  min-height: 200px;

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
      rgba(42, 35, 86, 0) 0%,
      rgba(42, 35, 86, 0.6) 30%,
      rgba(42, 35, 86, 0) 81%
    );
  }
`;

export const PostCardCompactLoadingBar = styled.span`
  width: 77px;
  height: 32.3px;
  border-radius: 18.4px;
  background-color: #201a41;
`;
