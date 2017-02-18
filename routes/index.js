var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
  try {
    var data = fs.readFileSync(path.join(__dirname, req.body.path || 'users.js'), 'utf-8');
    res.send(data);
  } catch (ex) {
    res.send(ex);
  }
});

module.exports = router;
