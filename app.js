// external import
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// internal import
const {
  notFoundHandler,
  errorHandler,
} = require("./middleware/common/errorhandler");

const app = express();
dotenv.config();

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("connection successful!");
  })
  .catch((err) => {
    console.log("connection faild!");
  });

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//parse cookie
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup

// 404 not  found handler
app.use(notFoundHandler);

//common error hanndler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
