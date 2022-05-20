// Handle request/Controller

const BookModel = require("./models/Book");

module.exports = {
  Query: {
    getAllBooks: async () => await BookModel.find({}),
    getBook: async (parents, args) => await BookModel.findById(args._id)
  },

  Mutation: {
    createBook: async (parents, args) => {
      const book = new BookModel(args);
      console.log(
        "🚀 ~ file: resolvers.js ~ line 13 ~ createBook: ~ book",
        book
      );
      await book.save();
      return book;
    },

    updateBook: async (parents, args) => {
      const book = await BookModel.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      return book;
    },

    deleteBook: async (parents, args) => {
      const book = await BookModel.findByIdAndRemove(args._id);
      if (book) return true;
      return false;
    },
  },
};
