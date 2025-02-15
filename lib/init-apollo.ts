import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import https from 'https';

let apolloClient = null;

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== 'undefined';
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'https://adm.i42.com.br/graphql', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      // Use fetch() polyfill on the server
      fetch: !isBrowser && fetch,
      fetchOptions: {
        agent: new https.Agent({ rejectUnauthorized: false, ecdhCurve: 'auto' })
      }
    }),
    cache: new InMemoryCache().restore(initialState || {}),
    typeDefs: `
      type PodcastPlayer {
        src: String
      }

      type Query {
        podcast: PodcastPlayer
      }

      type Mutation {
        setPodcastAttribute( src: String )
      }
    `,
    resolvers: {
      Query: {
        podcast: () => ({
          __typename: 'PodcastPlayer',
          src: ''
        })
      },
      Mutation: {
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
