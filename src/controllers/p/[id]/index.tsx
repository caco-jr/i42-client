import React, { useContext } from 'react';
import { NextPageContext } from 'next';
import { AppInitialProps } from 'next/app';

import { AppProps } from '@pages/_app';
import Layout from '@layouts/p/[id]';

interface InitialProps {}

type Query = {
  p_id: string;
};

const getInitialProps = async ({

}: NextPageContext & AppInitialProps): Promise<InitialProps> => {
  return {};
};

const PageContext = React.createContext<AppProps & InitialProps>({} as any);

const Page = (pageProps: AppProps & InitialProps) => (
  <PageContext.Provider value={pageProps}>
    <Layout />
  </PageContext.Provider>
);

Page.getInitialProps = getInitialProps;

export default Page;
export const usePageContext = () => useContext(PageContext);
