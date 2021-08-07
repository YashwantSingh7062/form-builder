const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Form {
    _id: ID!
    name: String!
    slug: String!
    total_response: Int
    createdAt: Date
    questions: [Question]
  }

  type FormMutation implements MutationResponse{
    message: String!
    form: Form!
  }

  type Forms implements ListResponse {
    forms: [Form],
    pageInfo: PageInfo!
  }
`;

module.exports = typeDefs;
