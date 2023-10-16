import { ListItem, ListItemText, Typography } from '@mui/material';

interface CommentProps {
  id: string;
  author: string;
  content: string;
}
function Comment(comment: CommentProps) {
  return (
    <ListItem key={comment.id} style={{ marginBottom: '10px', borderRadius: '10px', border: '1px solid #ccc' }}>
      <ListItemText
        primary={<Typography variant="body2" style={{ textDecorationLine: 'underline' }}>{comment.author}</Typography>}
        secondary={<Typography variant="body2" style={{ color: '#FFFFFF' }}>{comment.content}</Typography>}
      />
    </ListItem>
  );
}

export default Comment;
