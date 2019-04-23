const { gql } = require('apollo-server');

// The GraphQL schema express the relationships and the shape of the data to return, 
// not where the data comes from or how it might be stored.
const typeDefs = gql`
  type Query {
    users: [User!]!
    info: String!
  }
  
  type Mutation {
    signupUser(username: String!, password: String!): Token!
  }

  type Token {
    token: String!
  }

  type User {
    id: ID!
    username: String!
    password: String!
    department: String!
  }
`;

module.exports = typeDefs;
