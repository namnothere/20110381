import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

const NewArticleForm = () => {
  const [article, setArticle] = useState({ author: '', title: '', content: '' });
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('New post data:', article);

    fetch('http://localhost:5000/api/articles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Post created:');
      console.log(data);
      navigate(`/articles/${data.article.id}`);
    })
    .catch((error) => {
      console.error('Error creating post:', error);
    });

  };

  return (
    <Container>
      <a className="back-link" onClick={() => navigate('/')}>←</a>
      <h1>Create New Article</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={article.title}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          style={{ backgroundColor: '#f5f5f5' }}
          required
        />
        
        <TextField
          fullWidth
          label="Author"
          name="author"
          value={article.author}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          style={{ backgroundColor: '#f5f5f5' }}
          required
        />
        
        <TextField
          fullWidth
          label="Content"
          name="content"
          value={article.content}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          style={{ backgroundColor: '#f5f5f5' }}
          required
        />
        <Button type="submit" variant="contained" color="secondary">
          Create Post
        </Button>
      </form>
    </Container>
  );
};

export default NewArticleForm;
