import styled from 'styled-components';

export const PostScreenPodcastHeaderWrapper = styled.section`
  position: relative;
  margin-bottom: 55px;

  .post-screen-podcast-header__icon * {
    fill: #fff;
  }
`;

export const PostScreenPodcastHeaderTitle = styled.h1`
  font-size: 28px;
  line-height: 1.04;
  font-family: var(--title-font-family);
  width: auto;

  @media (min-width: 992px) {
    font-size: 48px;
  }

  @media (min-width: 768px) {
    color: #fff;
    font-size: 32px;
  }
`;

export const PostScreenPodcastHeaderBox = styled.section`
  margin-top: 15px;
  display: flex;
  align-content: flex-end;
  justify-content: space-between;

  @media (min-width: 768px) {
    position: absolute;
    bottom: 24px;
    left: 20px;
    right: 20px;
  }
`;

export const PostScreenPodcastHeaderPlay = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  background-color: var(--red);
  transition: 0.3s all ease;
  border-radius: 100%;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-content: center;

  &:hover {
    background-color: var(--dark-red);
  }
`;
