const {Router} = require("express");
const bookRouter = Router();

const {getAllBooks} = require("./controllers");

bookRouter.get("/books/getAllBooks", getAllBooks);

module.exports = bookRouter;


