const express = require("express");
const itemRoutes = require("./itemRoutes")

const app = express();

app.use(express.json());
app.use("/items", itemRoutes);






app.listen(3000, function () {
    console.log("Let's go shopping!");
  });