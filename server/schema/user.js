import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
    teams: [Team!]!
  }

  type Query {
    getUser(id: Int!): User!
    allUser: [User!]!
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): Boolean!
  }
`;
