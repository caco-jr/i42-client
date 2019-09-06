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
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
  // onDemandEntries: {
  //   maxInactiveAge: 1000 * 60 * 60 * 24
  // }
};

module.exports = withOffline(nextConfig);
