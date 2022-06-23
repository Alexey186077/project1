var express = require('express');
var router = express.Router();

let events = require('../controllers/events')

/* GET home page. */
router.get('/events', events.events);

module.exports = router;
