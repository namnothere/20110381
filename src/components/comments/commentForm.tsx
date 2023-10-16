import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';

const CommentForm = ({ id, onSubmit }: any) => {
  const [comment, setComment] = useState({ author: '', content: '' });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (comment.author && comment.content) {
      onSubmit(id, comment);
      setComment({ author: '', content: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Your Name"
        name="author"
        value={comment.author}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        style={{ backgroundColor: '#f5f5f5' }}
      />
      <TextField
        fullWidth
        label="Comment"
        name="content"
        multiline
        rows={4}
        value={comment.content}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        style={{ backgroundColor: '#f5f5f5' }}
      />

      <Button type="submit" variant="primary">Post Comment</Button>
    </form>
  );
};

export default CommentForm;
