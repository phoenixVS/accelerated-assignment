const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    getUsers: [User]
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    updateUser(id: ID!, name: String, email: String, password: String): User
    deleteUser(id: ID!): User
  }
`;

let users = [];

const resolvers = {
  Query: {
    getUsers: () => users,
    getUserById: (_, { id }) => users.find(user => user.id === id),
  },
  Mutation: {
    createUser: (_, { name, email, password }) => {
      const user = { id: users.length + 1, name, email, password };
      users.push(user);
      return user;
    },
    updateUser: (_, { id, name, email, password }) => {
      const userIndex = users.findIndex(user => user.id === id);
      if (name) users[userIndex].name = name;
      if (email) users[userIndex].email = email;
      if (password) users[userIndex].password = password;
      return users[userIndex];
    },
    deleteUser: (_, { id }) => {
      const userIndex = users.findIndex(user => user.id === id);
      const user = users[userIndex];
      users = users.filter(user => user.id !== id);
      return user;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});