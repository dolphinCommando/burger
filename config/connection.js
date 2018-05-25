//var keys = require('../public/js/keys.js');
require('dotenv').config();
var mysql = require("mysql");
const en = process.env;
var connection = mysql.createConnection({
  host: en.SQL_HOST,
  port: en.SQL_PORT,
  user: en.SQL_USER,
  password: en.SQL_PASSWORD,
  database: en.SQL_DATABASE
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
