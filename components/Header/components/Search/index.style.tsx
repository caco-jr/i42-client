import styled from 'styled-components';

export const SearchWrapper = styled.form`
  display: inline-flex;
  position: relative;
  margin-left: 30px;

  .c-search {
    &__button {
      padding: 5px;
      margin: auto 0;
      min-width: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 8px;
    }

    &__icon path {
      fill: var(--primary-color);
    }
  }

  input {
    background-color: transparent;
    color: #fff;
    border-radius: 20px;
    border: solid 1.3px #ffffff;
    padding: 5px 10px 5px 35px;
    font-size: 16px;

    &::placeholder {
      color: #fff;
    }
  }
`;
