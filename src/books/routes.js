const {Router} = require("express");
const bookRouter = Router();

const Book = require("./model");

bookRouter.get("/books/getAllBooks", async (request, response) => {
  const allBooks = await Book.find({});

  const successResponse = {
    message: "success",
    allBooks: allBooks,
  };

  response.send(successResponse);
});

module.exports = bookRouter;


