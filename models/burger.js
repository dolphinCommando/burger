var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  insertOne: function(value, cb) {
    orm.insertOne('burgers', 'burger_name', value, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne('burgers', id, true, function(res) {
      cb(res);
    });
  }
}

module.exports = burger;