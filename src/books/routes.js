const {Router} = require("express");
const bookRouter = Router();

const {getAllBooks} = require("./controllers");
const {addBook} = require("./controllers")

bookRouter.get("/books/getAllBooks", getAllBooks);

bookRouter.post("/books/addBook", addBook);

module.exports = bookRouter;


