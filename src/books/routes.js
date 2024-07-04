const {Router} = require("express");
const bookRouter = Router();

const {getAllBooks} = require("./controllers");
const {addBook} = require("./controllers");
const {updateAuthor} = require("./controllers");
const {deleteBook} = require("./controllers");
const {updateBookByTitle} = require("./controllers");
const {deleteAll} = require("./controllers")

bookRouter.get("/books/getAllBooks", getAllBooks);

bookRouter.post("/books/addBook", addBook);

bookRouter.put("/books", updateAuthor);

bookRouter.delete("/books", deleteBook);

// Dynamic update stretch goal=====================================

bookRouter.put("/books/updateBookByTitle", updateBookByTitle);

// ================================================================

// Delete all stretch goal=========================================

bookRouter.del("/books/deleteAll", deleteAll);

// ================================================================

module.exports = bookRouter;


