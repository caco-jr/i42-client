import React, { useContext } from 'react'
import { NextContext } from 'next'
import { AppInitialProps, AppProps } from '@src/app'
import Layout from '@layouts/post'

interface InitialProps {}

type Query = {}

const getInitialProps = async ({

}: NextContext<Query> & AppInitialProps): Promise<InitialProps> => {
  return {}
}

const PageContext = React.createContext<AppProps<Query> & InitialProps>({} as any)

const Page = (pageProps: AppProps<Query> & InitialProps) => (
  <PageContext.Provider value={pageProps}>
    <Layout />
  </PageContext.Provider>
)

Page.getInitialProps = getInitialProps

export default Page
export const usePageContext = () => useContext(PageContext)