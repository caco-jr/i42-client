const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');

const cssConfig = {
  cssModules: true
};

const nextConfig = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, 'src'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@controllers': path.resolve(__dirname, 'controllers'),
      '@router': path.resolve(__dirname, 'router'),
      '@components': path.resolve(__dirname, 'components'),
      '@helpers': path.resolve(__dirname, 'helpers'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@interfaces': path.resolve(__dirname, 'interfaces'),
      '@static': path.resolve(__dirname, 'static')
    };
    return config;
  },
  ...cssConfig,
  target: 'serverless'
};

module.exports = withTypescript(withCSS(nextConfig));
