import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Article from "./Article";
import MyLoader from "./MyLoader";
// Framer Motion
import { motion } from "framer-motion";

const Box = () => {

// Animation Variants
const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.5, when: "beforeChildren", staggerChildren:1 },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration:.5},
  },
};


  const articles = useSelector((state) => state.allArticles.articles);
  const loading = useSelector((state) => state.allArticles.loading);

  return (
    <div className="box font-montserrat">
      <div  className="bg-[#9448BC] px-4 pt-6 pb-[18px] flex flex-col justify-center items-center space-y-8">
        <motion.h1 variants={headingVariants} initial='hidden' animate='visible'  className="text-3xl text-[#F1DAC4] p-2 font-bold sm:text-4xl ">
          Featured Articles
        </motion.h1>
        
          {loading ? (
            <div className="flex justify-center  items-center">
              <MyLoader className="  w-full h-full  sm:w-[30rem] lg:w-[40rem]" />
            </div>
          ) : (
            <div className=" grid gap-y-8 md:grid-cols-2 md:grid-rows-2 md:gap-y-10 md:gap-x-6 xl:grid-cols-3 xl:grid-rows-1">
              {articles
                .filter((article, idx) => idx < 3)
                .map((article) => (
                  <Article
                    category={article.categories[0].categoryName}
                    category2={article?.categories[1]?.categoryName}
                    slugCategory={article.categories[0].slug}
                    slugCategory2={article?.categories[1]?.slug}
                    key={article._id}
                    slug={article.slug}
                    title={article.articleTitle}
                    date={article.updatedAt}
                    description={article.articleContent}
                    shortDesc={article.shortDesc}
                    author={article.author}
                    coverImg={article?.coverImage?.url}
                  />
                ))}
            </div>
          )}
       

        <span className="bg-[#F1DAC4] text-[#24272B] mt-7 h-[43px] w-[138px] rounded-[20px] text-center py-[13px] font-bold text-[14px] leading-[17px] sm:w-[178px] sm:h-[50px] sm:text-[20px] sm:py-[16px] ">
          <Link to={"/allArticles"}> Explore More</Link>
        </span>
      </div>
    </div>
  );
};

export default Box;
