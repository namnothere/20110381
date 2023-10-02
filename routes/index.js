var express = require('express');
var router = express.Router();
const { articles } = require('../models/article.model');
/* GET home page. */
router.get('/', function(_req, res, _next) {
  res.render('index', { posts: articles });
});

module.exports = router;
