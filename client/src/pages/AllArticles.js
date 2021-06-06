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
      <div className="bg-[#7699D4] font-montserrat ">
        <div className="flex flex-col items-center pb-[18px] px-8">
          <h2 className='text-4xl p-2 font-bold text-[#F1DAC4]  my-8 sm:text-3xl' >All Articles</h2>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-1">
            {loading ? (<MyLoader/>) : (articles.slice(0, visible).map((article) => (
              <Article
                category={article.categories[0].categoryName}
                slugCategory = {article.categories[0].slug}
                slug={article.slug}
                key={article._id}
                id={article._id}
                title={article.articleTitle}
                date={article.updatedAt}
                description={article.articleContent}
                shortDesc={article.shortDesc}
                author={article.author}
                coverImg={`http://localhost:1337${article?.coverImage?.url}`}
              />
            ))) }

          </div>
          <span className="cursor-pointer bg-[#F26419] text-[#F1DAC4] mt-7 h-[43px] w-[138px] rounded-[20px] pt-[12px] text-center align-middle font-bold text-[20px] leading-[17px]" onClick={showMore}>
          Load More
        </span>
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
