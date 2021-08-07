const Schema = require("./schema");
const { gql } = require("apollo-server-express");

const QueryMutation = gql`
  scalar Date
  type PageInfo {
    offset: Int
    hasNext: Boolean
  }

  interface MutationResponse {
    message: String!
  }

  interface ListResponse {
    pageInfo: PageInfo!
  }

  input FormInput{
    name: String!
  }

  input QuestionArr{
    question: String!
    question_type: QuestionTypes!
    answer: [String]!
  }

  input QuestionInput{
    form: ID!
    questions: [QuestionArr]!
  }
  
  #//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  #//                                                         QUERY
  #//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  type Query {
    form(slug: String!): Form!
    forms(offset: Int, limit: Int): Forms
    hello: String!
  }

  #//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  #//                                                        MUTATION
  #//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  type Mutation {
   addForm(form: FormInput!): Form!
   addQuestions(question: QuestionInput!): Form!
  }
`;

module.exports = [QueryMutation, ...Schema];
