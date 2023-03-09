const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    images: [String]!
    avatar: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    getImages: [String]!
    getAvatar: String
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!, avatar: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser: User
    addImage(downloadURL: String!): User
    addAvatar(downloadURL: String!): User
  }
`;

module.exports = typeDefs;
