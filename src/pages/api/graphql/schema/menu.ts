import { gql } from 'apollo-server-core';

const menuSchema = gql`
  extend type Query {
    menu(id: String!): [Menu]
  }

  type Menu {
    id: String
    title: String
    slug: String
  }
`;

export default menuSchema;
