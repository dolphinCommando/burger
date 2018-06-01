var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', (req, res) => {
  burger.selectAll(data => {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);        
    });
});

router.post('/api/burgers', (req, res) => {
  if (req.body.name.length > 40 || req.body.name === '' || req.body.name === null) {
    res.status(400).end();
  }
  else {
    burger.insertOne(req.body.name, (result) => {
      res.status(200).json({ id: result.id });
    });
  }
});

router.put('/api/burgers/:id', (req, res) => {
  burger.updateOne(req.params.id, (result) => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;

