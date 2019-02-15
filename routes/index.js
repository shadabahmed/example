var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let bodyClass = null;
  switch(process.env.BGCOLOR) {
    case 'blue':
      bodyClass = 'blueBody';
      break;
    case 'green':
      bodyClass = 'greenBody';
      break;
    default:
      bodyClass = 'coralBody';
      break;
  }
  res.render('index', {
    bodyClass: bodyClass
  });
});

module.exports = router;
