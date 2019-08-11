import { ApolloServer } from 'apollo-server-micro';

import schema from './schema';
import resolvers from './resolvers';
import { WpAPI } from './datasource';

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => ({ wpAPI: new WpAPI() })
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });
