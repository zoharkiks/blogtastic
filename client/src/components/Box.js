import React, { useEffect, useState } from "react";
import Article from "./Article";
import moment from "moment";

const Box = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  console.log(articles[0]);

  const getArticles = async () => {
    try {
      const res = await fetch(`http://localhost:1337/articles`);
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="box font-montserrat">
      <div className="bg-taupe w-screen mt-2 py-2 flex flex-col justify-center items-center">
        <h1 className="text-2xl p-4">LATEST ARTICLES</h1>
        {articles.map((article) => (
          <Article
          key={article.id}
            title={article.articleTitle}
            date={article.published_at}
            description={article.articleContent}
            coverImg={`http://localhost:1337${article.coverImage.url}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Box;
