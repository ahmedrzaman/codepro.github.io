var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

var successMessages = [];

function addMessage(msg) {
  successMessages.push(msg);
}

router.get('/test', function (req, res, next) {
  try {
    var filePath = path.join(__dirname, '..', '..', '..', 'SiteExtensions','letsencrypt','config','httpsacme-v01.api.letsencrypt.org', 'www.codeprotech.uk-key.pem');
    var cert = fs.readFileSync(filePath, 'utf8');
    res.send(cert);
  } catch (ex) {
    res.send({
      messages: successMessages,
      exception: ex
    });
  }
});



module.exports = router;
