import { gql } from 'apollo-server-micro';

const categorySchema = gql`
  extend type Query {
    category(slug: String!): Category!
    categories: [Category]!
  }

  type Category {
    id: Int!
    count: Int
    description: String
    name: String
    slug: String
    color: String
  }
`;

export default categorySchema;
