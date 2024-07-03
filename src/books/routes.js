const {Router} = require("express");
const bookRouter = Router();

const {getAllBooks} = require("./controllers");
const {addBook} = require("./controllers")
const {updateAuthor} = require("./controllers")

bookRouter.get("/books/getAllBooks", getAllBooks);

bookRouter.post("/books/addBook", addBook);

bookRouter.put("/books", updateAuthor);

module.exports = bookRouter;


