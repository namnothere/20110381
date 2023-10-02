const { v4: uuidv4 } = require('uuid');
class Comment {
  constructor(author, content, post_id) {
    this.id = uuidv4();
    this.content = content;
    this.author = author;
    this.postId = post_id;
  }
}
const comments = [];
module.exports = { Comment, comments };
  