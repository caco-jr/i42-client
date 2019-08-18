import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== 'undefined';
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'https://imperio42.com.br/graphql', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      // Use fetch() polyfill on the server
      fetch: !isBrowser && fetch
    }),
    cache: new InMemoryCache().restore(initialState || {}),
    typeDefs: `
      type Configuration {
        colorMode: String
      }

      type PodcastPlayer {
        src: String
      }

      type Query {
        configuration: Configuration
        podcast: PodcastPlayer
      }

      type Mutation {
        setConfiguration( colorMode: String )
        setPodcastAttribute( src: String )
      }
    `,
    resolvers: {
      Query: {
        configuration: () => ({
          __typename: 'Configuration',
          colorMode: 'dark'
        }),
        podcast: () => ({
          __typename: 'PodcastPlayer',
          src: ''
        })
      },
      Mutation: {
        setConfiguration: async (
          parent,
          { colorMode },
          { cache, getCacheKey }
        ) => {
          await cache.writeData({
            data: {
              configuration: {
                colorMode,
                __typename: 'Configuration'
              }
            }
          });
        },
        setPodcastAttribute: async (
          parent,
          { src },
          { cache, getCacheKey }
        ) => {
          await cache.writeData({
            data: {
              podcast: {
                src,
                __typename: 'PodcastPlayer'
              }
            }
          });
        }
      }
    }
  });
}

export default function initApollo(initialState?) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
