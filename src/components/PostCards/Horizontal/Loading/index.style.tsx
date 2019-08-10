import styled, { keyframes } from 'styled-components';

const loaderAnimate = keyframes`
    0% {
        transform: translate3d(-100%, 0, 0);
    }
    100% {
        transform: translate3d(100%, 0, 0);
    }
`;

export const PostCardHorizontalLoadingWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const PostCardHorizontalLoadingLeft = styled.section`
  margin-right: 12px;
`;

export const PostCardHorizontalLoadingRight = styled.section`
  flex: 1;
`;

export const PostCardHorizontalLoadingImage = styled.span`
  display: inline-flex;
  width: 120px;
  height: 120px;
  border-radius: var(--border-radius);
  background-color: var(--purple);
`;

export const PostCardHorizontalLoadingBar = styled.span`
  display: flex;
  width: calc(100% - 30px);
  height: 24px;
  background-color: var(--purple);
  border-radius: 18.4px;
  position: relative;
  overflow: hidden;

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
      rgba(32, 26, 65, 0.6) 30%,
      rgba(42, 35, 86, 0) 81%
    );
  }
`;
