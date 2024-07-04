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

app.del("/books/deleteAll", async (request, response) => {
  try {
    const result = await Book.deleteMany({});
    response.status(200).send(`${result.deletedCount} books were deleted.`);
  } catch (err) {
    response.status(500).send("Error deleting books: " + err.message);
  }
});


app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});

