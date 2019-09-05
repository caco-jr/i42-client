const path = require('path');
const withOffline = require('next-offline');

const isDev = process.env.NODE_ENV === 'dev';

const nextConfig = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': path.resolve(__dirname, 'pages/'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@controllers': path.resolve(__dirname, 'controllers'),
      '@components': path.resolve(__dirname, 'components'),
      '@helpers': path.resolve(__dirname, 'helpers/'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@interfaces': path.resolve(__dirname, 'interfaces'),
      '@static': path.resolve(__dirname, 'static'),
      '@services': path.resolve(__dirname, 'services'),
      '@lib': path.resolve(__dirname, 'lib')
    };

    return config;
  },
  target: 'serverless'
  // onDemandEntries: {
  //   maxInactiveAge: 1000 * 60 * 60 * 24
  // }
};

module.exports = withOffline(nextConfig);
