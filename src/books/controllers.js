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

// Dynamic update stretch goal=====================================

const updateBookByTitle = async (request, response) => {
  const { title, updateBook } = request.body;

  if (!title || !updateBook) {
    return response
      .status(400)
      .send("Missing required fields: title and updateBook");
  }

  try {
    const updateBookByTitle = await Book.findOneAndUpdate(
      { title: title },
      { $set: updateBook },
      { new: true },  // needed to return ew values only, without this the code will add to the existing database, rather than update.
    );

    if (updateBookByTitle) {
      response.status(200).json(updateBookByTitle);
    } else {
      response.status(404).send("No book found with that title.");
    }
  } catch (err) {
    response.status(500).send("Error updating book: " + err.message);
  }
};

// ================================================================

// Delete all stretch goal ========================================

const deleteAll = async (request, response) => {
  try {
    const result = await Book.deleteMany({});
    response.status(200).send(`${result.deletedCount} books were deleted.`);
  } catch (err) {
    response.status(500).send("Error deleting books: " + err.message);
  }
};

// ================================================================

module.exports = {
    getAllBooks: getAllBooks,
    addBook: addBook,
    updateAuthor: updateAuthor,
    deleteBook: deleteBook,
    updateBookByTitle: updateBookByTitle,
    deleteAll: deleteAll,
}