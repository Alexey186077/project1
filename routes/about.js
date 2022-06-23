var express = require('express');
var router = express.Router();

let about = require('../controllers/about')

/* GET home page. */
router.get('/about', about.about);

module.exports = router;
