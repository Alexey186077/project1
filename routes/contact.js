var express = require('express');
var router = express.Router();

let contact = require('../controllers/contact')

/* GET home page. */
router.get('/contact', contact.contact);

module.exports = router;
