import React from "react";
import {fetchCategory,removeSelectedCategory} from '../redux/actions/categoryAction'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Article from "../components/Article";
import MyLoader from "../components/MyLoader";
import { useEffect } from "react";

const Category = () => {
  // Fetching category and category specific articles from store
  const selectedCategory = useSelector((state) => state.category);
  const articles = useSelector((state) => state.category.category.articles);

  const {loading,category} =  selectedCategory


//   Getting category id
  const categoryId = useParams()
  const dispatch = useDispatch()
  
  // Pagination
  const [visible, setVisible] = useState(4);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  
//   Prevent error on refresh and 
  useEffect(() => {
    if (categoryId && categoryId !== "") {
      dispatch(fetchCategory(categoryId.id));
      
    }


  }, [categoryId]);


  return (
    <div className="category">
      <div className="bg-[#F1DAC4]  font-montserrat ">
        <div className="flex flex-col items-center pb-[18px] px-8">
          {loading ? (
            ""
          ) : (
            <h2 className="text-4xl p-2 font-bold text-[#24272B]  my-8 sm:text-3xl">Articles on {category.categoryName}</h2>
          )}
          <div className="grid gap-7 place-items-center md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-1">
            {loading ? (
              <MyLoader />
            ) : (
              articles
                ?.slice(0, visible).reverse()
                ?.map((article) => (
                  <Article
                    category={category.categoryName}
                    slugCategory = {category.slug}
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
                ))
            )}
            
          </div>
          <span
            className="cursor-pointer bg-[#F26419] text-[#F1DAC4] mt-7 h-[43px] w-[138px] rounded-[20px] pt-[12px] text-center align-middle font-bold text-[20px] leading-[17px]"
            onClick={showMore}
          >
            Load More
          </span>
        </div>
      </div>
    </div>
  );
};

export default Category;
