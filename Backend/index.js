const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { UserRouter } = require("./routes/user_routes.js");
require("dotenv").config();
const port = process.env.PORT;
const { Hotel } = require("./models/hotelSchema");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use("/user", UserRouter);
app.get("/", (req, res) => {
  res.send({
    message: "API is working fine",
  });
});

app.get("/images", async (req, res) => {
  try {
    const allData = await Hotel.find({});
    res.json(allData);
  } catch (error) {
    console.log(error);
  }
});

app.get("/homepage", (req, res) => {
  res.json("Sucess");
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
