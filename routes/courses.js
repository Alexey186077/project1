var express = require('express');
var router = express.Router();

let courses = require('../controllers/courses')

/* GET home page. */
router.get('/courses', courses.courses);

module.exports = router;
