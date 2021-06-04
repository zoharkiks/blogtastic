import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Article from "./Article";
import MyLoader from "./MyLoader";

const Box = () => {
  
  const articles = useSelector((state) => state.allArticles.articles);
  const loading = useSelector((state) => state.allArticles.loading);


  
  return (
    <div className="box font-montserrat">
      <div className="bg-[#9448BC] px-4 pt-6 pb-[18px] flex flex-col justify-center items-center space-y-8">
        <h1 className="text-2xl text-[#F1DAC4] underline font-bold sm:text-3xl ">Featured Articles</h1>
        <div className=" grid gap-y-8 md:grid-cols-2 md:grid-rows-2 md:gap-y-10 xl:grid-cols-3 xl:grid-rows-1">
          {loading ? (
            <MyLoader className='w-screen' />
          ) : (
            articles
              .filter((article, idx) => idx < 3)
              .map((article) => (
                <Article
                  category={article.categories[0].categoryName}
                slugCategory = {article.categories[0].slug}
                  key={article._id}
                  slug={article.slug}
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

        
        <span className="bg-[#F1DAC4] text-[#24272B] mt-7 h-[43px] w-[138px] rounded-[20px] text-center py-[13px] font-bold text-[14px] leading-[17px] ">
          <Link to={"/allArticles"}> Explore More</Link>
          </span>
        
      </div>
    </div>
  );
};

export default Box;
