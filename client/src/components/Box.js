import { useSelector } from "react-redux";
import Article from "./Article";
import MyLoader from "./MyLoader";


const Box = () => {
  const articles = useSelector((state) => state.allArticles.articles);
  const loading = useSelector(state=>state.allArticles.loading)

  
    return (
    <div className="box font-montserrat">
      <div className="bg-taupe px-4 p-3 flex flex-col justify-center items-center space-y-5">
        <h1 className="text-2xl p-4 ">LATEST ARTICLES</h1>
        {loading ?
        (<MyLoader /> ) : (articles.filter((article,idx)=> idx<4).map((article) => (
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

        <span className='bg-white p-4 rounded-xl font-medium text-xl'>Show More Articles</span>
        
      </div>
    </div>
  );
};

export default Box;
