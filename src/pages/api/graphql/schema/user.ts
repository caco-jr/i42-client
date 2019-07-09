import { gql } from 'apollo-server-core';

export default gql`
  extend type Query {
    users: [User!]!
  }

  type User {
    name: String
  }
`;
