import styled, { css } from 'styled-components';

const NAVBAR_ITEMS = [
  {
    positionX: '5px',
    width: '65px',
    color: 'var(--red)'
  },
  {
    positionX: '82px',
    width: '53px',
    color: 'var(--secondary-color)'
  },
  {
    positionX: '147px',
    width: '60px',
    color: '#e67e22'
  },
  {
    positionX: '219px',
    width: '105px',
    color: 'var(--green)'
  },
  {
    positionX: '336px',
    width: '149px',
    color: 'var(--blue)'
  }
];

export const NavbarItem = styled.a`
  display: inline-flex;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
  margin: 0 6px;

  &:last-of-type {
    padding-right: 0;
    margin-right: 0;
  }

  &.is-active {
    font-family: var(--title-font-family);
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

export const NavbarWrapper = styled.nav`
  position: relative;

  ${NAVBAR_ITEMS.map((item, index) => {
    const { color, width, positionX } = item;

    return css`
    ${NavbarItem}:nth-child(${index + 1}).is-active ~ ${NavbarLine} {
        transform: translateX(${positionX});
        width: ${width};
        background-color: ${color};
    }
    `;
  })}

  ${NAVBAR_ITEMS.map((item, index) => {
    const { color, width, positionX } = item;

    return css`
    ${NavbarItem}:nth-child(${index + 1}):hover ~ ${NavbarLine} {
        transform: translateX(${positionX});
        width: ${width};
        background-color: ${color};
    }
    `;
  })}
`;
