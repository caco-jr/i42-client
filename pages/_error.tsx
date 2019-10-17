import React from 'react';
import PageNotFound from '@layouts/404';
import ErrorPage from '@layouts/500';

const Error = ({ statusCode }) => {
  const handlePage = () => {
    if (statusCode === 404) {
      return <PageNotFound />;
    }

    return <ErrorPage />;
  };

  return statusCode ? handlePage() : <ErrorPage />;
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
