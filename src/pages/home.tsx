import { useEffect, useState } from 'react'
import '../App.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import ArticleCard from '../components/articles/articleCard';
import { useNavigate } from 'react-router-dom';

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

function HomePage() {
  const [articles, setArticles] = useState<Article[]>(mockPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const apiUrl = `/api/posts?page=${currentPage}`;

  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => setArticles(data.articles))
  //     .catch((error) => console.error('Error fetching posts:', error));
  // }, [currentPage]);

  useEffect(() => {
    fetch(`http://localhost:5000/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArticles(data);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="container">
      <h1>All Blog Posts</h1>
      <Button variant="primary" onClick={() => navigate('/new-article')} style={{ float: 'right', position: 'fixed', top: '2vh', right: '2vw' }}>Add New Post</Button>
      <div className="post-cards">
      <Container>
        {articles.map((article) => (
          <Row key={article.id}>
            <Col>
              <ArticleCard article={article} />
            </Col>
          </Row>
        ))}
      </Container>
      </div>
      <div className="pagination">
        <button onClick={prevPage}>Previous</button>
        <span>{currentPage}</span>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default HomePage;
