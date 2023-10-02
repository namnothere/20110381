const { v4: uuidv4 } = require('uuid');

class Article {
  constructor(title, content, author) {
    this.id = uuidv4();
    this.title = title;
    this.content = content;
    this.author = author;
    this.comments = [];
  }
}


const articles = [
  {
    id: uuidv4(),
    title: 'Getting Started with Express.js',
    content: 'Express.js is a popular web application framework for Node.js. It makes building web applications and APIs with Node.js easy and efficient.',
    author: 'John Doe',
  },
  {
    id: uuidv4(),
    title: 'JavaScript Best Practices for Front-end Development',
    content: 'Front-end development relies heavily on JavaScript. Learn about best practices for writing clean and maintainable JavaScript code in your web applications.',
    author: 'Jane Smith',
  },
  {
    id: uuidv4(),
    title: 'Introduction to React.js',
    content: 'React.js is a JavaScript library for building user interfaces. It is widely used for creating interactive and dynamic web applications.',
    author: 'Michael Johnson',
  },
  {
    id: uuidv4(),
    title: 'Node.js for Backend Development',
    content: 'Node.js is a versatile runtime that allows you to build scalable and high-performance server-side applications. Explore its capabilities and use cases.',
    author: 'Emily Brown',
  },
];

module.exports = { Article, articles };

