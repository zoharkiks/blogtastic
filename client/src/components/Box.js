import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Article from "./Article";
import MyLoader from "./MyLoader";

const Box = () => {
  const articles = useSelector((state) => state.allArticles.articles);
  const loading = useSelector((state) => state.allArticles.loading);



  
  return (
    <div className="box font-montserrat">
      <div className="bg-taupe px-4 p-8 flex flex-col justify-center items-center space-y-8">
        <h1 className="text-2xl p-4 sm:text-3xl ">EDITOR'S CHOICE</h1>
        <div className=" grid gap-y-8 md:grid-cols-2 md:grid-rows-2 md:gap-y-10 xl:grid-cols-3 xl:grid-rows-1">
          {loading ? (
            <MyLoader className='w-screen' />
          ) : (
            articles
              .filter((article, idx) => idx < 3)
              .map((article) => (
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
              ))
          )}
        </div>

        
          <span className="bg-white p-3 px-6 rounded-full font-medium text-xl my-5 sm:text-2xl sm:px-8">
          <Link to={"/allArticles"}> All Articles</Link>
          </span>
        
      </div>
    </div>
  );
};

export default Box;
