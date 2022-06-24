var express = require('express');
var router = express.Router();

let trainer = require('../controllers/trainer')

/* GET trainer page. */
router.get('/trainer', trainer.trainer);

module.exports = router;
