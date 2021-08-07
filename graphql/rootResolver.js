const { GraphQLScalarType, Kind } = require('graphql');

// Resolvers
const FormResolvers = require('./resolvers/forms');

const RootResolver = {
  MutationResponse: {
    __resolveType() {
      return null;
    }
  },
  ListResponse: {
    __resolveType() {
      return null;
    }
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      return new Date(value).toISOString(); // Convert outgoing Date to ISO string for JSON
    },
    parseValue(value) {
      return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
      }
      return null; // Invalid hard-coded value (not an integer)
    },
  }),
  Query: {
    hello: () => {
      return "Hello form server";
    }
  }
};

module.exports = [
  RootResolver,
  FormResolvers
];
