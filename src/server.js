require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Book = require("./books/model");

const connection = require("./db/connection");

const bookRouter = require("./books/routes");

const app = express();

app.use(express.json());

connection();

app.use(bookRouter);



app.delete("/books", async (request, response) =>{
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
})

app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});

