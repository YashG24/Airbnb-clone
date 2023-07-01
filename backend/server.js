const express = require("express");

const app = express();

const path = require("path");

const port = 3000;

const signUpCollection = require("./database/db");

app.get("/", (req, res) => {
  res.send("Its working");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
