import React, { useState, useEffect } from 'react';
import axios from 'axios';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=jp&apiKey=5225cd33f92c4d7b8938cd06d60ae664');
      setNews(response.data.articles);
    };

    fetchNews();
  }, []);

  return (
    <div>
      {news.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
  );
}

export default News;
