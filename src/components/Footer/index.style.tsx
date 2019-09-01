import styled from 'styled-components';

const component = '.c-footer';

export const FooterWrapper = styled.footer`
  color: var(--text-color);
`;

export const FooterTop = styled.section`
  padding: 40px 0 30px;
  background: url('/static/images/background/bg-footer.webp') center;
  background-size: cover;

  a {
    color: var(--text-color);
    text-decoration: none;
    display: block;
    line-height: 1.75;
    font-weight: 500;
  }

  ${component}__block {
    margin-bottom: 30px;
  }

  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const FooterBottom = styled.section`
  background-color: var(--background-color);
  text-align: center;
  padding: 25px 0 30px;

  p:nth-of-type(1) {
    margin-bottom: 5px;
  }
`;

export const FooterTitle = styled.h2`
  font-size: 22px;
  color: var(--title-color);
  line-height: 1.27;
  font-weight: 900;
  margin-bottom: 12px;
`;
