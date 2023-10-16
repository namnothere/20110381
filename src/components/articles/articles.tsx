import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArticleCard from "./articleCard";

interface Article {
  id: number;
  title: string;
  author: string;
  content: string;
}

const mockPosts = [
  {
    id: 1,
    title: 'Sample Post 1',
    author: 'John Doe',
    content: 'This is the content of the first post.',
  },
  {
    id: 2,
    title: 'Sample Post 2',
    author: 'Jane Smith',
    content: 'This is the content of the second post.',
  },
];

function Articles({ page = 1 }: { page: number }) {
  const [articles, setArticles] = useState<Article[]>(mockPosts);

  useEffect(() => {
    const apiUrl = `/api/posts?page=${page}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Error fetching posts:', error));
  }, [page]);

  return (
    <Container>
      {articles.map((article) => (
        <Row key={article.id}>
          <Col>
            <ArticleCard article={article} />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Articles;
  