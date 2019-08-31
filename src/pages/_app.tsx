import React from 'react';
import App, { AppInitialProps } from 'next/app';
import DefaultAppIProps from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from '@lib/with-apollo-client';
import { NextRouter } from 'next/router';
import PodcastPlayer from '@components/PodcastPlayer';

export interface AppProps extends AppInitialProps {
  router: NextRouter;
}

interface IProps {
  apolloClient: any;
}

const getInitialProps = async ({
  Component,
  ctx
}): Promise<AppInitialProps> => {
  const initialProps = {} as AppInitialProps;

  const pageProps =
    Component.getInitialProps &&
    (await Component.getInitialProps({ ...ctx, ...initialProps }));

  return { pageProps, ...initialProps };
};

class MyApp extends App<DefaultAppIProps & AppProps & IProps> {
  static getInitialProps = getInitialProps;

  render() {
    const { Component, pageProps, apolloClient, ...otherProps } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} {...otherProps} />

        <PodcastPlayer />
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
