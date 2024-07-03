require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Book = require("./books/model");

const connection = require("./db/connection");

const app = express();

app.use(express.json());

connection();

app.get("/books/getAllBooks", async (request, response) => {
  const allBooks = await Book.find({});
  
   const successResponse = {
     message: "success",
     allBooks: allBooks,
   };

   response.send(successResponse);
});

app.post("/books/addBook", async (request, response) => {
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
});


app.put("/books", async (request, response) => {
  const newAuthor = await Book.findOneAndUpdate({
    author: request.body.author
  });

  const successResponse = {
    message: "success",
    author: newAuthor,
  };

  response.send(successResponse)
})

app.delete("/books", )

app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});