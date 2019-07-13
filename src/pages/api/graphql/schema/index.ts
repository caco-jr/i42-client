import { gql } from 'apollo-server-core';

import postSchema from './post';
import menuSchema from './menu';

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

const schema = [linkSchema, postSchema, menuSchema];

export default schema;
