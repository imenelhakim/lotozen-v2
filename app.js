const express = require("express");
var app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

const userRoute = require("./src/routes/user.route");
const transactionRoute = require("./src/routes/transaction.route");
const gameRoute = require("./src/routes/game.route");
const chestRoute = require("./src/routes/chest.route");

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("assets"));
app.use("/assets", express.static("assets"));

app.use("/user", userRoute);
app.use("/transaction", transactionRoute);
app.use("/game", gameRoute);
app.use("/chest", chestRoute);

app.get("/hello", (req, res) => {
  return res.status(200).json({ Greetings: "Hello World!" });
});

module.exports = app;