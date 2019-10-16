import styled from 'styled-components';

export const PostScreenHeaderWrapper = styled.section`
  .post-page-toggle-mode {
    padding-left: 0;
    justify-content: flex-end;
  }

  @media (max-width: 365px) {
    .post-page-toggle-mode span {
      display: none;
    }
  }
`;

export const PostScreenHeaderLeftColumn = styled.section`
  display: flex;
  flex-flow: column;
`;

export const PostScreenHeaderRightColumn = styled.section``;

export const PostScreenHeaderTitle = styled.h1`
  font-family: var(--title-font-family);
  font-weight: var(--title-font-weight);
  font-size: 38px;
  color: var(--title-color);
  margin: 0 0 5px;
  line-height: 1.04;

  @media (max-width: 991px) {
    font-size: 32px;
  }

  @media (max-width: 767px) {
    font-size: 28px;
  }
`;

export const PostScreenHeaderSubTitle = styled.h2`
  font-size: 18px;
  line-height: 1.27;
  color: var(--title-color);
  margin: 0;
  font-family: var(--primary-font-family);
  font-weight: var(--text-font-weight);
`;

export const PostScreenHeaderImage = styled.img`
  margin: 0px 0 40px;
`;

export const PostScreenHeaderDate = styled.span`
  margin: 0 0 12px;

  @media (max-width: 991px) {
    margin: 12px 0;
  }
`;
