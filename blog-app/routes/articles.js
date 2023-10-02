var express = require('express');
var router = express.Router();
const postController = require('../controllers/article.controller');

/* GET all articles. */
router.get('/', function(req, res, next) {
  console.log('get all');
  postController.getArticles(req, res);
});

router.get('/create-post', function(req, res, next) {
  console.log('create post');
  postController.getCreateNewPost(req, res);
});
/* GET article. */
router.get('/:id', function(req, res, next) {
  postController.viewArticle(req, res);
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
