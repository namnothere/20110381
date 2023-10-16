import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import ArticleDetail from './components/articles/articleDetail';
import NewArticleForm from './pages/create-article';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/articles/:id" Component={ArticleDetail} />
        <Route path="/new-article" Component={NewArticleForm} />
      </Routes>
    </Router>
  );
}

export default App
