const { articles } = require('../models/article.model');
const { Comment, comments } = require('../models/comment.model');

exports.postComment = (req, res) => {
  const { author, content, postId } = req.body;

  if (!author || !content || !postId) {
    return res.status(400).json({ error: 'Author and content are required.' });
  }

  const newComment = new Comment(author, content, postId);
  comments.push(newComment);

  res.status(201).json(newComment);
};

exports.getComments = (req, res) => {
  const postId = req.params.id;
  const postComments = comments.filter(comment => comment.postId === postId);

  res.json(postComments);
};
