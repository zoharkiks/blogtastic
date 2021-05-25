import React, { useEffect } from "react";
// Import Share Icons
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";
// Redux and Router
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import {
  fetchArticle,
  removeSelectedArticle,
} from "../../redux/actions/articleActions";
// Import loader
import MyLoader from "../MyLoader";

const Article = () => {
  // Selected Article State
  const dispatch = useDispatch();
  const articleId = useParams();
  const history = useHistory();

  const article = useSelector((state) => state.article);
  const { articleTitle, articleContent, coverImage, published_at, loading, shortDesc, author,id } =
    article;

  useEffect(() => {
    if (articleId && articleId !== "") {
      dispatch(fetchArticle(articleId.id));
    }

    dispatch(removeSelectedArticle());
  }, [articleId]);

  return (
    <div className="article">
      {loading ? (
        <MyLoader />
      ) : (
        <div className="bg-yellow-200 py-3  flex flex-col items-center font-montserrat font-medium space-y-4">
          <div
            className="flex flex-row justify-flex-end w-full"
            onClick={() => history.goBack()}
          >
            Go back
          </div>
          <span>------</span>
          <h1 className="text-center text-lg px-4 ">{articleTitle}</h1>
          <span>------</span>
          <p className="text-center italic font-normal px-3">
           {shortDesc}
          </p>
          <span className="text-center font-light text-sm ">
            by: {author}
          </span>
          <span className="text-center font-light text-sm">{published_at}</span>

          {/* Share Icons */}
          <div className=" flex justify-evenly w-1/2 ">
            <FacebookShareButton
              url="https://www.google.com/"
              quote="Test"
              hashtag="test"
            >
              <FacebookIcon size="32" round={true} />
            </FacebookShareButton>

            <TwitterShareButton>
              <TwitterIcon size="32" round={true} />
            </TwitterShareButton>

            <PinterestShareButton>
              <PinterestIcon size="32" round={true} />
            </PinterestShareButton>
          </div>
          {/* -------------- */}

          <div className="bg-green-300 h-56 ">
            <img
              className=" w-full h-full object-cover"
              src={`http://localhost:1337${coverImage?.url}`}
              alt=""
            />
          </div>
          <p className="text-left font-normal text-base px-2">
            {articleContent}
          </p>
        </div>
      )}
    </div>
  );
};

export default Article;
