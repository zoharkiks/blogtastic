import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Article from "./Article";

const Box = () => {
 
  const articles = useSelector(state => state.allArticles.articles)

 


  return (
    <div className="box font-montserrat">
      <div className="bg-taupe w-screen mt-2 py-2 flex flex-col justify-center items-center">
        <h1 className="text-2xl p-4">LATEST ARTICLES</h1>
        {articles.map((article) => (
          <Article
          key={article._id}
          id={article._id}
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
