import React, { useEffect, useState } from 'react';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=vn&apiKey=YOUR_API_KEY')
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div>
      <h2>Tin Tức Nóng Hổi</h2>
      {news.length === 0 ? <p>Đang tải...</p> : news.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default News;