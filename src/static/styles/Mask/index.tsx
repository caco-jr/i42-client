import styled from 'styled-components';

const Mask = styled.div`
  border-radius: $border-radius;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 45%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export default Mask;
