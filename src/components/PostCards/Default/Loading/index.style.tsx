import styled, { keyframes } from 'styled-components';

const loaderAnimate = keyframes`
    0% {
        transform: translate3d(-100%, 0, 0);
    }
    100% {
        transform: translate3d(100%, 0, 0);
    }
`;

export const PostCardLoadingWrapper = styled.section``;

export const PostCardLoadingHeader = styled.section`
  width: 100%;
  height: 240px;
  background-color: var(--purple);
  border-radius: var(--border-radius);
  display: flex;
  align-items: flex-end;
  padding: 10px;
  position: relative;
  overflow: hidden;
  z-index: 2;

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

export const PostCardLoadingHeaderBar = styled.span`
  width: 80px;
  height: 32px;
  background-color: #1e1942;
  border-radius: 18.4px;
`;

export const PostCardLoadingBar = styled.span`
  display: flex;
  width: calc(100% - 30px);
  height: 24px;
  background-color: var(--purple);
  margin-top: 25px;
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
      rgba(10, 8, 24, 0) 0%,
      rgba(10, 8, 24, 0.6) 30%,
      rgba(10, 8, 24, 0) 81%
    );
  }
`;
