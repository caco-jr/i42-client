import styled, { keyframes } from 'styled-components';

const initPlayer = keyframes`
    from {
      bottom: -150px;
    }

    to {
      bottom: -50px;
    }
`;

export const PodcastPlayerWrapper = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  animation: ${initPlayer} 0.3s ease-in 1s normal 1 both;
  transition: 0.3s all ease;
  transform: translateY(0);
  z-index: 99;

  &:hover {
    transform: translateY(-45px);
  }
`;
