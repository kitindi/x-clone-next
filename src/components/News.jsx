"use client";
import React, { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(3);

  // fetch data from sarav API endpoints

  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/technology/gb.json")
      .then((resp) => resp.json())
      .then((data) => setNews(data.articles));
  }, []);

  console.log(news);
  return (
    <div className="text-gray-700 space-x-3 bg-gray-100 rounded-md h-fit py-4">
      <h1 className="text-xl px-4 font-bold">Whats happening</h1>
      {news.slice(0, articleNum).map((article) => (
        <div key={article.url} className="mb-4">
          <a href={article.url} target="_blank">
            <div className="flex items-center justify-between px-2 py-4 space-x-1 hover:bg-gray-200 transition-all">
              <div>
                <h6 className="text-sm">{article.title}</h6>
                <p className="text-xs font-medium text-gray-500">{article.source.name}</p>
              </div>
              <img src={article.urlToImage} alt={article.title} className="w-24 rounded-md" />
            </div>
          </a>
        </div>
      ))}

      <button onClick={() => setArticleNum(articleNum + 3)} className="ml-4 font-medium">
        Load more...
      </button>
    </div>
  );
};

export default News;
