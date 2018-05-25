var keys = require('../public/js/keys.js');
//require('dotenv').config();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: keys.host,
  port: keys.port,
  user: keys.user,
  password: keys.password,
  database: keys.database
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
