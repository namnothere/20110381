const { articles, Article } = require('../models/article.model');

exports.viewArticle = (req, res) => {
  const postId = req.params.id;

  const post = articles.find(post => post.id === postId);

  if (post) {
    res.render('view-article', { article: post });
  } else {
    res.status(404).json({ error: 'Article not found' });
  }
};

exports.getArticle = (req, res) => {
  const postId = req.params.id;

  const post = articles.find(post => post.id === postId);

  if (post) {
    res.json({ article: post });
  } else {
    res.status(404).json({ error: 'Article not found' });
  }
};

exports.getArticles = (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;  
    const paginatedPosts = articles.slice(offset, offset + limit);
  
    res.json({
      page: page,
      total_pages: Math.ceil(articles.length / limit),
      posts: paginatedPosts,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.create = (req, res) => {
  const { title, content, author } = req.body;
  const newArticle = new Article(title, content, author);
  articles.push(newArticle);

  res.json({ message: 'Article created successfully', article: newArticle });
};

exports.delete = (req, res) => {
  const postId = req.params.id;

  const deletedPostIndex = articles.findIndex(post => post.id === postId);

  if (deletedPostIndex !== -1) {
    articles.splice(deletedPostIndex, 1);
    res.json({ message: 'Article deleted successfully' });
  } else {
    res.status(404).json({ error: 'Article not found' });
  }
};

exports.edit = (req, res) => {
  const postId = req.params.id;
  const { content } = req.body;

  const postToUpdate = articles.find(post => post.id === postId);

  if (postToUpdate) {
    postToUpdate.content = content;
    
    // remove the post from the array
    articles.splice(articles.indexOf(postToUpdate), 1);
    articles.push(postToUpdate); 

    res.json({ message: 'Article edited successfully', post: postToUpdate });
  } else {
    res.status(404).json({ error: 'Article not found' });
  }
};

exports.getCreateNewPost = (req, res) => {
  res.render('create-article');
};