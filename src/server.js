const express = require("express")

const app = express()

app.use(express.json());

const fakeData = [
    { id: 1, title: "book1", author: "author1", genre: "genre1" },
    { id: 2, title: "book2", author: "author2", genre: "genre2" },
    { id: 3, title: "book3", author: "author3", genre: "genre3" },
]


app.get("/books", (request, response) => {
    // console.log(request.path, " :", typeof request.path);
    // console.log(response);
    response.send("Hello from /books");
});

app.get("/books/getAllBooks", (request, response) => {
    // console.log(request.path);

    const successResponse = {
        message: "success",
        books: fakeData,
    }

    response.send(successResponse);
});

app.post("/books/addBook", (request, response) => {
    // console.log(request.body);
    fakeData.push(request.body);

    const successResponse = {
        message: "success",
        bookes: fakeData,
    }

    response.send(successResponse);
})



app.put("/books", (request, response) => {
    const title = request.body.title;
    const newTitle = request.body.newTitle;

    const index = fakeData.findIndex((book) => book.title === title);

   if (index !== -1) {
     if (newTitle) {
       fakeData[index].title = newTitle;
     }
     response.status(200).send("Book updated");
   } else {
     response.status(404).send("Book not found");
   }

})

app.delete("/books", (request, response) => {
  function findBook(X) {
    return X.title === request.body.title;
  }
  const index = books.findIndex(findBook);


    
  console.log(index);

  books.splice(index, 1);
});

app.listen(5001, () => {
    console.log(`Server is listen of port 5001`);
});