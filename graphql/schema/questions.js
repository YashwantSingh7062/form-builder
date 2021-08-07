const { gql } = require("apollo-server-express");

const typeDefs = gql`
  enum QuestionTypes{
    drop_down
    text
    multi_choice
    radio
  }

  type Question {
    _id: ID
    question: String!
    question_type: QuestionTypes
    answer: [String!]
    createdAt: Date
    form: Form
  }

`;

module.exports = typeDefs;
