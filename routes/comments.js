var express = require('express');
var router = express.Router();
const commentController = require('../controllers/comment.controller');

/* GET all comment in article. */
router.get('/articles/:id', function(req, res, next) {
  commentController.getComments(req, res);
});

router.post('/', function(req, res, next) {
  commentController.postComment(req, res);
});

module.exports = router;
