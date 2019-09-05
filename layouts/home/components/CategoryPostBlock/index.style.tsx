import styled from 'styled-components';
import Button from '@components/Button';

export const CategoryPostBlockWrapper = styled.section`
  display: flex;
  flex-flow: column;

  ${Button} {
    display: flex;
    margin: 30px auto 50px;
  }
`;
