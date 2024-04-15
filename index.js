const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./database/db");

// express intialize in app
const app = express();

//dotenv initialize
dotenv.config({ path: "./config/config.env" });

// cors intialize
app.use(cors());
app.use(express.json());

// database connection

dbConnection();

// routes

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/resturant", require("./routes/resturantRoutes"));
app.use("/api/v1/category", require("./routes/categoryRoutes"));
app.use("/api/v1/food", require("./routes/foodRoutes"));

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Welcome to Food Server APP API BASE PROJECT </h1>");
});
// app listen
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server runing on ${process.env.PORT}`);
});

// export app
module.exports = app;
