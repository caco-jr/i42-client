import React from 'react';
import App, { AppInitialProps } from 'next/app';
import DefaultAppIProps from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { NextRouter } from 'next/router';
import { register, unregister } from 'next-offline/runtime';

import withApolloClient from '@lib/with-apollo-client';
import PodcastPlayer from '@components/PodcastPlayer';
import { gTagInitialize } from '@components/Scripts/GoogleTagManager';

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

  componentDidMount() {
    gTagInitialize();
    register();

    console.log('===========');
    console.log(navigator);
    console.log('===========');
    console.log(typeof window);
  }

  componentWillUnmount() {
    unregister();
  }

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
