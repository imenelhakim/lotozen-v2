const connection = require("../utils/db");
const bcrypt = require("bcryptjs");
const sendmail = require("../utils/sendmail");
const { query } = require("express");
var bodyParser = require("body-parser");

exports.Login = (req, res) => {
  let user = req.body.email;
  // console.log(req.body.email);
  console.log(user);
  var query =
    "SELECT username, password, coins, money, isActive , ban, paypal from users WHERE email = ?";
  connection.query(query, user, (err, result) => {
    console.log(result);
    return res.status(200).json(result);
  });
};
