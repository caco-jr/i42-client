import React, { useContext } from 'react';
import { NextPageContext } from 'next';
import { AppInitialProps } from 'next/app';

import { AppProps } from '@pages/_app';
import Layout from '@layouts/c/[id]';

interface InitialProps {}

const getInitialProps = async ({
  res
}: NextPageContext & AppInitialProps): Promise<InitialProps> => {
  if (res) {
    const TIME_SECONDS = '1';

    res.setHeader(
      'Cache-Control',
      `s-maxage=${TIME_SECONDS}, stale-while-revalidate`
    );
  }

  return {};
};

const PageContext = React.createContext<AppProps & InitialProps>({} as any);

const Page = (pageProps: AppProps & InitialProps) => (
  <PageContext.Provider value={pageProps}>
    <Layout {...pageProps} />
  </PageContext.Provider>
);

Page.getInitialProps = getInitialProps;

export default Page;
export const usePageContext = () => useContext(PageContext);
