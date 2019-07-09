import { gql } from 'apollo-server-micro';

export default gql`
  extend type Query {
    messages: [Message!]!
  }

  type Message {
    text: String!
  }
`;
