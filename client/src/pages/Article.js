import React, { useEffect } from "react";
// Import Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import PinterestIcon from "@material-ui/icons/Pinterest";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Avatar from "@material-ui/core/Avatar";

// Import Share
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";
// Redux and Router
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import {
  fetchArticle,
  removeSelectedArticle,
} from "../redux/actions/articleActions";
// Import loader
import MyLoader from "../components/MyLoader";

// Helper functions
import { dateParser } from "../helpers/date.js";
import firstLetter from "../helpers/firstLetter";
import estimateTime from '../helpers/readingTime'
const Article = () => {
  // Selected Article State
  const dispatch = useDispatch();
  const articleId = useParams();

  const article = useSelector((state) => state.article);

  const {
    articleTitle,
    articleContent,
    coverImage,
    updatedAt,
    loading,
    shortDesc,
    author,
    categories,
  }  = article;


  useEffect(() => {
    if (articleId && articleId !== "") {
      dispatch(fetchArticle(articleId.id));
    }

    dispatch(removeSelectedArticle());
  }, [articleId]);
 



  return (
    <div className="article text-[#24272B] bg-[#FAF2EA] font-montserrat  ">
      {loading ? (
        <div className="p-4">
          <MyLoader />
        </div>
      ) : (
        <div className=" flex flex-col text-center items-center px-4 pb-4  "> 
          <MenuBookIcon fontSize="large" className="mt-8" />
          <h1 className=" text-2xl  font-bold mt-2 sm:text-3xl sm:px-5">
            {articleTitle}
          </h1>
          <p className=" text-lg mt-2 min-w-40 sm:text-2xl">
            {shortDesc}
          </p>
          <span className="bg-[#F26419] text-white font-semibold text-left rounded-[10px] mt-[8px]  max-h-8 w px-2 sm:text-xl ">
            <Link to={`/categories/${categories ? categories[0].slug : null}`}>
              # {categories ? categories[0].categoryName : null}
            </Link>{" "}
          </span>

        {
          categories &&  categories[1] ? <span className="bg-[#F26419] text-white font-semibold text-left rounded-[10px] mt-[8px]  max-h-8 w px-2 sm:text-xl ">
          <Link to={`/categories/${categories ? categories[1].slug : null}`}>
            # {categories ? categories[1].categoryName : null}
          </Link>{" "}
        </span> : ''
        }

        <span className='text-lg mt-2'>{estimateTime(`${articleContent}`)} </span>


          <div className="h-[160px] w-full mt-4 ">
            <img
              className="object-cover h-full w-full"
              src={`http://localhost:1337${coverImage?.url}`}
              alt=""
            />
          </div>

          <div className="flex items-center justify-space-between space-x-16 mt-6">
            <div className="flex flex-col justify-evenly items-center">
              <Avatar>{firstLetter(`${author}`)}</Avatar>
              <span className=" text-[16px] mt-2 sm:text-xl">
              {author}
              </span>
            </div>
            <span className="font-medium text-lg sm:text-xl">
              {dateParser(`${updatedAt}`)}
            </span> 
          </div>

          {/* Share Icons */}
            <div className=" flex justify-evenly space-x-4 mt-5 border-b-2 border-[#24272B] pb-3">
              <FacebookShareButton
                url={`https://localhost:1337alllArticles/${articleId}`}
                quote={`Just found out this amazing article on Blogtastic`}
                hashtag="test"
              >
                <FacebookIcon className="sm:!text-4xl" />
              </FacebookShareButton>

              <TwitterShareButton
                url={`https://localhost:1337alllArticles/${articleId}`}
                title={articleTitle}
              >
                <TwitterIcon className="sm:!text-4xl" />
              </TwitterShareButton>

              <PinterestShareButton
                url={`https://localhost:1337alllArticles/${articleId}`}
                description={shortDesc}
                media={`http://localhost:1337${coverImage?.url}`}
              >
                <PinterestIcon className="sm:!text-4xl" />
              </PinterestShareButton>

              <EmailShareButton
                url={`https://localhost:1337alllArticles/${articleId}`}
                subject={articleTitle}
                body={`Just found out this amazing article on Blogtastic \n \n ${articleContent}`}
              >
                <EmailIcon className="sm:!text-4xl" />
              </EmailShareButton>

              <WhatsappShareButton
                url={`https://localhost:1337alllArticles/${articleId}`}
                title={articleTitle}
              >
                <WhatsAppIcon className="sm:!text-4xl" />
              </WhatsappShareButton>
            </div>
            {/* -------------- */}
            

          

          <p className="text-left text-lg leading-8 mt-8 whitespace-pre-line border-b-2 border-[#24272B] pb-3 sm:text-2xl sm:leading-[3rem] lg:px-16   ">
            {articleContent}
          </p>
        </div>
      )}
    </div>
  );
};

export default Article;
