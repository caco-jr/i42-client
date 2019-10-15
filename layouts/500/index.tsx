import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';
import { ErrorPageWrapper } from './index.style';

const ErrorPage = () => {
  return (
    <ScreenClassProvider>
      <Container>
        <ErrorPageWrapper>
          <span>Olá 500</span>
        </ErrorPageWrapper>
      </Container>
    </ScreenClassProvider>
  );
};

export default ErrorPage;
