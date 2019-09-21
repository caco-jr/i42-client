import styled from 'styled-components';

interface Props {
  backgroundColor: string;
}

export const CategoryLabelWrapper = styled.a<Props>`
  min-width: 77px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff !important;
  padding: 5px 15px;
  margin: 5px 10px 5px 0;
  background-color: ${props => props.backgroundColor};
  border-radius: 18.4px;
  text-decoration: none;
  font-size: 13.5px;
  font-family: var(--title-font-family);
  font-weight: var(--title-font-weight);
  line-height: normal;
`;
