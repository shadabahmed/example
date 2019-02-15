var express = require('express');
var router = express.Router();

/* GET health status */
router.get('/', function(req, res, next) {
  if (process.env.HEALTHY === 'false') {
    res.status(500).json({
      status: 'ERROR',
      message: 'Generic Error'
    });
  } else {
    res.status(200).json({
      status: 'OK',
      message: 'Healthy'
    });
  }
});

module.exports = router;
