import styled from 'styled-components';

export const PostScreenAudimaWrapper = styled.div`
  &:not(:empty) {
    margin: 0 0 30px !important;
    border-radius: var(--border-radius);
    background-color: white;

    #audimaBanner {
      display: none !important;
    }
  }
`;
