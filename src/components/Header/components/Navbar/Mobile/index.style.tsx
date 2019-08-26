import styled from 'styled-components';

interface Props {
  height: number;
}

export const NavbarMobileWrapper = styled.nav<Props>`
  background-color: var(--background-color);
  overflow: hidden;
  transition: 0.3s all ease;
  height: 0;

  &.c-navbar-mobile--active {
    height: ${props => props.height}px;
  }
`;

export const NavbarMobileList = styled.section`
  display: flex;
  flex-flow: column;
  padding: 30px 0;
`;

export const NavbarMobileItem = styled.a`
  display: inline-flex;
  color: var(--text-color);
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
  margin: 0 6px;

  &.is-active {
    font-family: var(--title-font-family);
  }
`;
