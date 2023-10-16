import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Comments from '../comments/comments';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentForm from '../comments/commentForm';

interface Article {
  id: string;
  title: string;
  author: string;
  content: string;
}

const mockPosts = [
  {
    id: '1',
    title: 'Sample Post 1',
    author: 'John Doe',
    content: 'This is the content of the first post.',
  },
  {
    id: '2',
    title: 'Sample Post 2',
    author: 'Jane Smith',
    content: 'This is the content of the second post.',
  },
];

function ArticleDetail() {

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.article);
        setArticle(data.article);
      })
      .catch((error) => console.error('Error fetching article:', error));
  }, []);
    
  const [article, setArticle] = useState<Article | null>();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  });

  const handleCommentSubmit = (articleId: any, comment: any) => {
    console.log(`Article ID: ${articleId}`);
    console.log('Comment Data:', comment);

    fetch(`http://localhost:5000/api/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        postId: id,
        author: comment.author,
        content: comment.content,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error('Error posting comment:', error));

  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleRemove = () => {
    fetch(`http://localhost:5000/api/articles/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .then(() => {
      navigate('/');
    })
    .catch((error) => console.error('Error posting comment:', error));
  };

  const handleOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSave = () => {
    if (article && editedContent != undefined) {
      setArticle({ ...article, content: editedContent });

      fetch(`http://localhost:5000/api/articles/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postId: id,
          content: editedContent,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error('Error posting comment:', error));

    }
    setIsEditing(false);
  };

  const [editedContent, setEditedContent] = useState(article?.content);

  return (
    <div>
      <a className="back-link" onClick={() => navigate('/')}>←</a>
      {article && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>{article.title}</h1>
            <div>
              <IconButton
                aria-label="article actions"
                onClick={handleOpenMenu}
                style={{ color: 'white'}}
              >
              <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleRemove}>Remove</MenuItem>
              </Menu>
            </div>
          </div>
          <p>Author: {article.author}</p>

          {isEditing ? (
            <div>
              <textarea
                ref={textareaRef}
                defaultValue={article.content}
                className="textarea-autosize"
                onChange={(e) => {
                  setEditedContent(e.target.value);
                }}
              />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <p>
              {article.content}
            </p>
          )}

        </div>
      )}

      <Comments articleId={id ? id : undefined} />
      <CommentForm id={id} onSubmit={handleCommentSubmit} />
    </div>
  );
}

export default ArticleDetail;
