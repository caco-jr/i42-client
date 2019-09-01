import React, { useContext, useState, Dispatch, useEffect } from 'react';
import { NextPageContext } from 'next';
import { AppInitialProps } from 'next/app';

import { AppProps } from '@pages/_app';
import Layout from '@layouts/p/[id]';

interface InitialProps {}

interface InitialStateInterface {
  colorMode: 'light' | 'dark'
}

const getInitialProps = async ({

}: NextPageContext & AppInitialProps): Promise<InitialProps> => {
  return {};
};

const PageContext = React.createContext<[ InitialStateInterface, any ]>([{} as InitialStateInterface, () => {}]);

const initialState: InitialStateInterface = {
  colorMode: 'dark'
};

const Page = pageProps => {
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    const colorCache = localStorage.getItem('colorMode');

    // @ts-ignore
    !!colorCache && setState({...initialState, colorMode: colorCache})
  }, [])

  return (
    <PageContext.Provider value={[state, setState]}>
      <Layout {...pageProps} />
    </PageContext.Provider>
  );
};

Page.getInitialProps = getInitialProps;

export default Page;
export const usePageContext = () => useContext(PageContext);
