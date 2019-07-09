import React from 'react';
import App, { Container, AppInitialProps } from 'next/app';
import DefaultAppIProps from 'next/app';
import { WithRouterProps } from 'next/dist/client/with-router';

export interface AppProps extends AppInitialProps {
  router: WithRouterProps;
}

const getInitialProps = async ({
  Component,
  ctx
}: any): Promise<AppInitialProps> => {
  const initialProps = {} as AppInitialProps;

  const pageProps =
    Component.getInitialProps &&
    (await Component.getInitialProps({ ...ctx, ...initialProps }));

  return { pageProps, ...initialProps };
};

class MyApp extends App<DefaultAppIProps & AppProps> {
  static getInitialProps = getInitialProps;

  render() {
    const { Component, pageProps, ...otherProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} {...otherProps} />
      </Container>
    );
  }
}

export default MyApp;
