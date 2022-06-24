var express = require('express');
var router = express.Router();

let courses = require('../controllers/courses')

/* GET courses page. */
router.get('/courses', courses.courses);

module.exports = router;
