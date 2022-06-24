var express = require('express');
var router = express.Router();

let events = require('../controllers/events')

/* GET event page. */
router.get('/events', events.events);

module.exports = router;
