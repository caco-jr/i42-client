import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';
import Link from 'next/link';

import { ErrorPageWrapper, ErrorPageBox, ErrorPageText } from './index.style';
import Button from '@components/Button';

const ErrorPage = () => {
  return (
    <ScreenClassProvider>
      <ErrorPageWrapper>
        <Container style={{ width: '100%' }}>
          <ErrorPageBox>
            <img src="/static/images/background/500.png" />

            <ErrorPageText>
              Desculpe, encontramos um erro no seu caminho, se precisar de ajuda
              mande um email para a base em contato@imperio42.com.br.
            </ErrorPageText>

            <Link href="/">
              <Button as="a" styleType="outline" href="/">
                Me leve para a Home
              </Button>
            </Link>
          </ErrorPageBox>
        </Container>
      </ErrorPageWrapper>
    </ScreenClassProvider>
  );
};

export default ErrorPage;
