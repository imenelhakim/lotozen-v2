const connection = require('../utils/db');
const bcrypt =  require('bcryptjs');
const sendmail = require('../utils/sendmail');
const {query} = require("express");

exports.Login = (req, res) => {
    let user = req.body;
    console.log(req.body.email);
    const query = "SELECT username, password, coins, money, isActive , ban, paypal from users WHERE email = 'aaaa@aas.com'";
    connection.query(query, (err, result) => {
        console.log(result);
        return res.status(200).json(result);
    });
}
