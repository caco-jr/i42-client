import { gql } from 'apollo-server-micro';

import postSchema from './post';
import menuSchema from './menu';
import categorySchema from './category';

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

const schema = [linkSchema, postSchema, menuSchema, categorySchema];

export default schema;
