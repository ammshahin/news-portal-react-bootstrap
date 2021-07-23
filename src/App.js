
import './App.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';
import Nav from './components/Nav/Navigation';
import Navigation from './components/Nav/Navigation';

function App() {
  const [news, setNews] = useState([]);

  useEffect( () =>
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b89e71e2ce554b49be4114766ad7a37f')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  ,[]);

  return (
    <div className="App">
      <Navigation></Navigation>
      {
        news.map((article, uuid) => <News key={uuid} article={article}></News>)
      }
    </div>
  );
}

export default App;
