var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require("cors");

const indexRouter = require('./routes/index');
const articlesRouter = require('./routes/articles');
const articlesApiRouter = require('./routes/articlesApi');
const commentsRouter = require('./routes/comments');

const port = 5000;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', indexRouter);
app.use(indexRouter);
app.use('/articles', articlesRouter);
app.use('/api/articles', articlesApiRouter);
app.use('/comments', commentsRouter);
app.use('/api/comments', commentsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});