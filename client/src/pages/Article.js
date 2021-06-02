import React, { useEffect } from "react";
// Import Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import PinterestIcon from "@material-ui/icons/Pinterest";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

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
import { useParams } from "react-router";
import {
  fetchArticle,
  removeSelectedArticle,
} from "../redux/actions/articleActions";
// Import loader
import MyLoader from "../components/MyLoader";
// Helper functions
import { dateParser } from "../helpers/date.js";
import { Link } from "react-router-dom";

const Article = () => {
  
  // Selected Article State
  const dispatch = useDispatch();
  const articleId = useParams();


  const article = useSelector((state) => state.article);
console.log(article);
  const {
    articleTitle,
    articleContent,
    coverImage,
    updatedAt,
    loading,
    shortDesc,
    author,
    categories,
  } = article;

  useEffect(() => {
    if (articleId && articleId !== "") {
      dispatch(fetchArticle(articleId.id));
    }

    dispatch(removeSelectedArticle());
  }, [articleId]);

  return (
    <div className="article bg-taupe ">
      {loading ? (
        <div className="p-4">
          <MyLoader />
        </div>
      ) : (
        <div className="bg-taupe p-3 py-10 px-8 flex flex-col items-center font-montserrat font-medium space-y-8 ">
          <div className="bg-white flex  flex-col items-center space-y-6 p-3 rounded-xl py-10">
            <h1 className="text-center text-2xl px-4 sm:text-3xl sm:px-5">
              {articleTitle}
            </h1>
            <span className="bg-green-300 rounded-2xl p-1 px-3 font-light sm:text-xl "><Link to={`/categories/${categories ? categories[0].slug : null}`} >
              # {categories ? categories[0].categoryName : null}
              </Link> </span>
            <p className="text-center italic font-normal px-3 sm:text-2xl">
              {shortDesc}
            </p>
            <span className="text-center font-light text-sm sm:text-xl">
              by: {author}
            </span>
            <span className="text-center font-light text-sm sm:text-xl">
              {dateParser(`${updatedAt}`)}
            </span>

            {/* Share Icons */}
            <div className=" flex justify-evenly space-x-4">
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
          </div>

          <div className="">
            <img
              className="object-contain max-h-[25rem] w-full"
              src={`http://localhost:1337${coverImage?.url}`}
              alt=""
            />
          </div>
          <p className="text-left font-normal text-lg leading-8 px-15 whitespace-pre-line sm:text-2xl sm:leading-[3rem] lg:px-16   ">
            {articleContent}
          </p>
        </div>
      )}
    </div>
  );
};

export default Article;
