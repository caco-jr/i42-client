import React from 'react';
import { NextPageContext } from 'next';

import { AppProps } from '@pages/_app';
import Layout from '@layouts/index';

interface InitialProps {}

const getInitialProps = async ({
  res
}: NextPageContext & AppProps): Promise<InitialProps> => {
  if (res) {
    const TIME_SECONDS = '1';

    res.setHeader(
      'Cache-Control',
      `s-maxage=${TIME_SECONDS}, stale-while-revalidate`
    );
  }

  return {};
};

const Page = ({  }: AppProps & InitialProps) => <Layout />;

Page.getInitialProps = getInitialProps;

export default Page;
