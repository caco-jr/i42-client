import styled, { css } from 'styled-components';

interface Props {
  styleType?: 'confirm' | 'outline' | 'basic';
}

const BaseButton = css`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1.5px solid transparent;
  border-radius: 18.4px;
  background-color: var(--primary-color);
  padding: 8px 15px;
  color: var(--text-color);
  font-size: 16px;
  font-family: var(--title-font-family);

  &:focus {
    outline: none;
  }

  &:hover {
    transition: 0.2s all ease-in-out;
    text-decoration: none;
    color: var(--text-color);
  }
`;

const ConfirmButton = css`
  background-color: var(--green);

  &:hover {
    background-color: var(--green);
  }
`;

const BasicButton = css`
  background-color: transparent;
  color: color(dark, text);
`;

const OutlineButton = css`
  background-color: transparent;
  border-color: var(--primary-color);
  color: var(--text-color);
  z-index: 2;

  &::before {
    content: '';
    border-radius: 13px;
    opacity: 0;
    background-color: var(--primary-color);
    z-index: -2;
    transition: 0.3s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
  }

  &:hover {
    color: var(--text-color);

    &:before {
      left: 0;
      right: 0;
      opacity: 1;
    }
  }
`;

const Button = styled.button<Props>`
  ${BaseButton};

  ${props => {
    switch (props.styleType) {
      case 'confirm':
        return ConfirmButton;

      case 'basic':
        return BasicButton;

      case 'outline':
        return OutlineButton;

      default:
        break;
    }
  }}

  &[disabled] {
    pointer-events: none;
    background-color: var(--light-grey);
    color: var(--dark-grey);
  }
`;

export default Button;
