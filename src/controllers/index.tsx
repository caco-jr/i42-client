import React from 'react';

import { AppProps } from '../pages/_app';
import Layout from '../layouts';

interface InitialProps {}

const getInitialProps = async ({  }: AppProps): Promise<InitialProps> => {
  return {};
};

const Page = ({  }: AppProps & InitialProps) => <Layout />;

Page.getInitialProps = getInitialProps;

export default Page;
