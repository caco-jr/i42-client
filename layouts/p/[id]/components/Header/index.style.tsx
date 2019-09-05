import styled from 'styled-components';

export const PostScreenHeaderWrapper = styled.section`
  .post-page-toggle-mode {
    padding-right: 0;
    justify-content: flex-end;
  }

  @media (max-width: 365px) {
    .post-page-toggle-mode span {
      display: none;
    }
  }
`;

export const PostScreenHeaderLeftColumn = styled.section``;

export const PostScreenHeaderRightColumn = styled.section`
  display: flex;
  flex-flow: column;
  align-items: flex-end;

  @media (max-width: 991px) {
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

export const PostScreenHeaderTitle = styled.h1`
  font-family: var(--title-font-family);
  color: var(--title-color);
  margin: 0 0 5px;
  font-size: 48px;
  line-height: 1.04;

  @media (max-width: 991px) {
    font-size: 32px;
  }

  @media (max-width: 767px) {
    font-size: 28px;
  }
`;

export const PostScreenHeaderSubTitle = styled.h2`
  font-size: 22px;
  line-height: 1.27;
  color: var(--title-color);
  margin: 0;
  font-family: var(--primary-font-family-medium);
`;

export const PostScreenHeaderImage = styled.img`
  margin: 40px 0 40px;
`;

export const PostScreenHeaderDate = styled.span`
  margin: 0 0 12px;

  @media (max-width: 991px) {
    margin: 12px 0;
  }
`;
