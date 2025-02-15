const path = require('path');
const withOffline = require('next-offline');

const isDev = process.env.NODE_ENV === 'dev';

const handleHash = () => {
  const date = new Date();

  return date.getTime().toString();
};

const nextOfflineConfig = {
  // add the homepage to the cache
  // transformManifest: manifest =>
  //   [{ url: '/', revision: handleHash() }].concat(manifest),
  generateInDevMode: false,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    cleanupOutdatedCaches: true,
    clientsClaim: true,
    skipWaiting: true,
    globPatterns: ['static/**/*'],
    globDirectory: '.',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 60 * 60 * 24 * 30 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
};

const nextConfig = {
  target: 'serverless',
  ...nextOfflineConfig,
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
  }
  // onDemandEntries: {
  //   maxInactiveAge: 1000 * 60 * 60 * 24
  // }
};

module.exports = withOffline(nextConfig);
