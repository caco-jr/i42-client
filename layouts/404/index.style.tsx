import styled from 'styled-components';

export const PageNotFoundWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
`;

export const PageNotFoundBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px 30px 60px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border: solid 1px #979797;
`;

export const PageNotFoundText = styled.p`
  color: var(--text-color);
  line-height: 1.33;
  font-size: 18px;
  font-weight: 500;
  max-width: 590px;
  text-align: center;
  margin-bottom: 30px;
`;
