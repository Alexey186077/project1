var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var home = require('./routes/home');
var about = require('./routes/about');
var courses = require('./routes/courses');
var trainer = require('./routes/trainer');
var events = require('./routes/events');
var princing = require('./routes/princing');
var contact = require('./routes/contact');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', home);
app.use('/about', about);
app.use('/courses', courses);
app.use('/trainer', trainer);
app.use('/events', events);
app.use('/princing', princing);
app.use('/contact', contact);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;