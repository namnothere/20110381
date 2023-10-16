import { useState, useEffect } from 'react';
import { List, Typography } from '@mui/material';
import Comment from './comment';

interface CommentProps {
  id: string;
  author: string;
  content: string;
}

const mockComments = [{
  id: '1',
  comments: [
    {
      id: '1',
      author: 'John Doe',
      content: 'This is a mock comment 1',
    },
    {
      id: '2',
      author: 'Alice Smith',
      content: 'Another mock comment here',
    },
    {
      id: '3',
      author: 'Bob Johnson',
      content: 'Mock comment number 3',
    },
  ]},
  { id: '2',
  comments: [
    {
      id: '1',
      author: 'Doe',
      content: 'This is a mock comment 1',
    },
    {
      id: '2',
      author: 'Smith',
      content: 'Another mock comment here',
    },
    {
      id: '3',
      author: 'Johnson',
      content: 'Mock comment number 3',
    },
  ]}
]

function Comments({ articleId }: { articleId: string | undefined }) {

  if (articleId === undefined) {
    return (
      <Typography variant="h5">Comments</Typography>
    );
  }

  const [comments, setComments] = useState<CommentProps[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/comments/articles/${articleId}`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => console.error('Error fetching article:', error));
  }, []);

  return (
    <div>
      <Typography variant="h5">Comments</Typography>
      <List>
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </List>
    </div>
  );
}

export default Comments;
