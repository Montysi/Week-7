require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

console.log("HELLO_WORLD: ", process.env.HELLO_WORLD);

const connection = async () => {
  await mongoose.connect(
    process.env.MONGO_URI
  );
  console.log("DB is working")
};

connection();

// Book model=======================

  const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,

    }
  });

  const Book = mongoose.model("Book", bookSchema);

// Book model ends==================

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