var connection = require('./connection.js');

var orm = {
  selectAll: function(table, cb) {
    queryVal = 'SELECT * FROM ' + table;
    connection.query(queryVal, (err, result) => {
      if (err) throw err;
      cb(result);  
    });
  },
  insertOne: function(table, col, value, cb) {
    queryVal = 'INSERT INTO ';
    queryVal += table;
    queryVal += ' (';
    queryVal += col;
    queryVal += ') VALUES ("';
    queryVal += value;
    queryVal += '");'
    connection.query(queryVal, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, id, devoured, cb) {
    var queryVal = 'UPDATE ' + table;
    queryVal += ' SET devoured = ';
    queryVal += devoured;
    queryVal += ' WHERE id = ';
    queryVal += id + ';';
    connection.query(queryVal, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }

}


module.exports = orm;