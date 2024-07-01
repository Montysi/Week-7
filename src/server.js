const express = require("express")

const app = express();

app.use("/activityPages", express.static("activityPages"))
app.use("/example", express.static("example"));

app.listen(5001, () => {
    console.log(`Server is listen of port 5001`);
});