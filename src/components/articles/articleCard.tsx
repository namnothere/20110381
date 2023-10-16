import { Button, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

interface PostCardProps {
  article?: {
    id: number;
    title: string;
    author: string;
    content: string;
  };
}

const readMore = (navigate: any, {article}: PostCardProps) => {
  navigate(`/articles/${article?.id}`);
}

const ArticleCard = ({ article }: PostCardProps) => {
  const navigate = useNavigate();

  if (!article) {
    return null;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.content}
        </Card.Text>
        <Button variant="primary" onClick={() => readMore(navigate, {article})}>Read More</Button>
      </Card.Body>
    </Card>
  );
};
 
export default ArticleCard;
