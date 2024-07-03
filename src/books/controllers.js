const Book = require("./model");

const getAllBooks = async (request, response) => {

  const allBooks = await Book.find({});

  const successResponse = {
    message: "success",
    allBooks: allBooks,
  };

  response.send(successResponse);
};

const addBook = async (request, response) => {

  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
};

const updateAuthor = async (request, response) => {
  const { currentAuthor, newAuthor } = request.body;

  const updatedBook = await Book.findOneAndUpdate(
    { author: currentAuthor },
    { author: newAuthor },
    { new: true }
  );

  if (!updatedBook) {
    return response.status(404).send({ message: "Book not found" });
  }

  const successResponse = {
    message: "success",
    author: updatedBook.author,
  };

  response.send(successResponse);
};

const deleteBook = async (request, response) => {
  const deleteBook = await Book.findOneAndDelete({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "successfully deleted",
    deleteBook: deleteBook,
  };

  response.send(successResponse);
};

module.exports = {
    getAllBooks: getAllBooks,
    addBook: addBook,
    updateAuthor: updateAuthor,
    deleteBook: deleteBook,
}