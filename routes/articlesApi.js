var express = require('express');
var router = express.Router();
const postController = require('../controllers/article.controller');

/* GET all articles. */
router.get('/', function(req, res, next) {
  postController.getArticles(req, res);
});

/* GET article. */
router.get('/:id', function(req, res, next) {
  postController.getArticle(req, res);
});

router.post('/', function(req, res, next) {
  postController.create(req, res);
});

router.put('/:id', function(req, res, next) {
  postController.edit(req, res);
})

router.delete('/:id', function(req, res, next) {
  postController.delete(req, res);
})

module.exports = router;
