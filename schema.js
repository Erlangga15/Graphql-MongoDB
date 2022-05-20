// Schema graphql

const { gql } = require("apollo-server");

//* Buat object type Book
//* Type Query digunakan untuk menampilkan data
//* Type Mutation digunakan untuk edit/delete data
//* Tanda [] merupakan List Field untuk menampilkan data dari tipe tertentu

const typeDef = gql`
  type Book {
    _id: ID!,
    title: String!,
    author: String!,
    description: String,
    release_year: Int!,
    genre: String!
  }

  type Query {
    getAllBooks: [Book]!,
    getBook(_id: ID!): Book
  }

  type Mutation {
    createBook(
      title: String!,
      author: String!,
      description: String,
      release_year: Int!,
      genre: String!
    ): Book!

    updateBook(
      _id: ID!,
      title: String,
      author: String,
      description: String,
      release_year: Int,
      genre: String
      ): Book!

      deleteBook(
        _id: ID!
      ): Boolean
  }
`;

module.exports = typeDef;
