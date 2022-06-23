var express = require('express');
var router = express.Router();

let princing = require('../controllers/princing')

/* GET home page. */
router.get('/princing', princing.princing);

module.exports = router;
