import styled from 'styled-components';

interface NavbarItemProps {
  active?: boolean;
}

export const NavbarWrapper = styled.nav`
  position: relative;
`;

export const NavbarItem = styled.a<NavbarItemProps>`
  display: inline-flex;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
  margin: 0 6px;

  &:last-child {
    padding-right: 0;
    margin-right: 0;
  }
`;

export const NavbarLine = styled.span`
  content: '';
  width: 10px;
  height: 2.5px;
  transform: translateX(0);
  transition: all 0.3s ease;
  border-radius: 2.5px;
  position: absolute;
  bottom: -3px;
  left: 0;
`;
