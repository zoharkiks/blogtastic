import React, { useState } from "react";
import { useSelector } from "react-redux";
import Article from "../components/Article";
import MyLoader from "../components/MyLoader";

const AllArticles = () => {

  // Fetching articles from store
  const articles = useSelector((state) => state.allArticles.articles);
  const loading = useSelector((state) => state.allArticles.loading);

  
  // Pagination
  const [visible, setVisible] = useState(4);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div className="allArticles">
      <div className="bg-taupe font-montserrat ">
        <div className="flex flex-col items-center">
          <h2 className='text-2xl p-4 sm:text-3xl' >All Articles</h2>
          <div className="grid gap-7 px-2">
            {loading ? (<MyLoader/>) : (articles.slice(0, visible).map((article) => (
              <Article
                category={article.categories[0].categoryName}
                key={article._id}
                id={article._id}
                title={article.articleTitle}
                date={article.published_at}
                description={article.articleContent}
                shortDesc={article.shortDesc}
                author={article.author}
                coverImg={`http://localhost:1337${article?.coverImage?.url}`}
              />
            ))) }
            
          </div>
          <span className="bg-white p-4 rounded-xl font-medium text-xl my-5 sm:text-2xl sm:p-4" onClick={showMore}>
          Show More Articles
        </span>
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
