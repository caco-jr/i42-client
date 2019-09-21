import styled, { css } from 'styled-components';

const NAVBAR_ITEMS = [
  {
    positionX: '7px',
    width: '73px',
    color: 'var(--red)'
  },
  {
    positionX: '92px',
    width: '61px',
    color: 'var(--secondary-color)'
  },
  {
    positionX: '165px',
    width: '67px',
    color: '#e67e22'
  },
  {
    positionX: '249px',
    width: '113px',
    color: 'var(--green)'
  },
  {
    positionX: '372px',
    width: '177px',
    color: 'var(--blue)'
  }
];

export const NavbarItem = styled.a`
  display: inline-flex;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: var(--text-font-weight);
  padding: 5px;
  margin: 0 6px;

  &.is-active {
    font-weight: var(--title-font-weight);
  }
`;

export const NavbarLine = styled.span`
  content: '';
  width: 10px;
  height: 1.5px;
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
