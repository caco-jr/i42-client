import styled from 'styled-components';

const component = '.c-footer';

export const FooterWrapper = styled.footer`
  color: var(--text-color);
  background: var(--background-color)
    url('/static/images/background/footer.webp') center;
  background-size: cover;
`;

export const FooterList = styled.ul`
  list-style: none;
`;

export const FooterListItem = styled.li`
  margin-bottom: 10px;
`;

export const FooterTop = styled.section`
  padding: 30px 0;

  a {
    color: var(--text-color);
    text-decoration: none;
    display: inline-block;
    font-weight: 500;
    padding: 5px 15px;
    margin-left: -15px;
  }

  ${component}__block {
    margin-bottom: 20px;
  }
`;

export const FooterBottom = styled.section`
  text-align: left;
  padding: 25px 0 30px;

  p:nth-of-type(1) {
    margin-bottom: 10px;
  }
`;

export const FooterTitle = styled.h2`
  font-size: 22px;
  color: var(--title-color);
  line-height: 1.27;
  font-weight: 900;
  margin-bottom: 12px;
`;
