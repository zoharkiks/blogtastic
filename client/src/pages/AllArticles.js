import React, { useState } from "react";
import { useSelector } from "react-redux";
import Article from "../components/Article";
import MyLoader from "../components/MyLoader";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

const AllArticles = () => {
  // Fetching articles from store
  const articles = useSelector((state) => state.allArticles.articles);
  const loading = useSelector((state) => state.allArticles.loading);

  // Pagination
  const [visible, setVisible] = useState(4);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  // Animation Variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '-100vw',
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        ease:'easeInOut',
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };





  return (
    <div className="allArticles">
      <div className="bg-[#7699D4] font-montserrat ">
        <motion.div variants={containerVariants}
        initial="hidden"
        animate="visible"  className="flex flex-col items-center pb-[18px] px-8">
          <h2 className="text-4xl p-2 font-bold text-[#F1DAC4]  my-8 sm:text-4xl">
            All Articles
          </h2>
          
            {loading ? (
               <div className="flex justify-center  items-center">
               <MyLoader className=" w-full h-full  sm:w-[30rem] lg:w-[40rem]" />
             </div>
            ) : (
              <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-1">
              {articles
                .slice(0, visible)
                .map((article) => (
                  <Article
                    category={article.categories[0].categoryName}
                    category2={article?.categories[1]?.categoryName}
                    slugCategory={article.categories[0].slug}
                    slugCategory2={article?.categories[1]?.slug}
                    slug={article.slug}
                    key={article._id}
                    id={article._id}
                    title={article.articleTitle}
                    date={article.updatedAt}
                    description={article.articleContent}
                    shortDesc={article.shortDesc}
                    author={article.author}
                    coverImg={`http://192.168.29.80:1337${article?.coverImage?.url}`}
                  />
                ))}
                </div>
            )}
          
          <span
            className="cursor-pointer bg-[#F26419] text-[#F1DAC4] mt-7 h-[43px] w-[120px] rounded-[20px] pt-[12px] text-center align-middle font-bold text-[14px] leading-[17px] sm:w-[140px] sm:h-[50px] sm:text-[20px] sm:py-[16px]"
            onClick={showMore}
          >
            Load More
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default AllArticles;
