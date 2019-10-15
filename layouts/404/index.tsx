import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';
import Link from 'next/link';

import {
  PageNotFoundWrapper,
  PageNotFoundBox,
  PageNotFoundText
} from './index.style';
import Button from '@components/Button';

const PageNotFound = () => {
  return (
    <ScreenClassProvider>
      <PageNotFoundWrapper>
        <Container style={{ width: '100%' }}>
          <PageNotFoundBox>
            <img src="/static/images/background/404.png" />

            <PageNotFoundText>
              Oh não! Desculpe, nós não conseguimos achar a página que você está
              procurando nesta galáxia.
            </PageNotFoundText>

            <Link href="/">
              <Button as="a" styleType="outline" href="/">
                Me leve para a Home
              </Button>
            </Link>
          </PageNotFoundBox>
        </Container>
      </PageNotFoundWrapper>
    </ScreenClassProvider>
  );
};

export default PageNotFound;
