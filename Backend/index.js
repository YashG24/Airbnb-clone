const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { UserRouter } = require("./routes/user_routes.js");
require("dotenv").config();
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", UserRouter);
app.get("/", (req, res) => {
  res.send({
    message: "API is working fine",
  });
});

app.listen(port, async () => {
  try {
    await connection;
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }

  console.log("Server is running on port number", port);
});
