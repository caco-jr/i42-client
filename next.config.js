const path = require('path');

const nextConfig = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, 'src/'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@controllers': path.resolve(__dirname, 'controllers'),
      '@components': path.resolve(__dirname, 'components'),
      '@helpers': path.resolve(__dirname, 'helpers/'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@interfaces': path.resolve(__dirname, 'interfaces'),
      '@static': path.resolve(__dirname, 'static')
    };

    return config;
  },
  target: 'serverless'
};

module.exports = nextConfig;
