import React, { useEffect, useState } from "react";

// Import Components
import Comments from '../components/Comments.jsx'
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
import estimateTime from "../helpers/readingTime";
// Framer Motion
import { motion } from "framer-motion";
import parse from 'html-react-parser';


const Article = () => {
  // Animation Variants
  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        type: "tween",
        when: "beforeChildren",
        staggerChildren: 0.4,
        duration: .3,
      },
    },
  };


  // Selected Article State
  const dispatch = useDispatch();
  const articleId = useParams();
  const article = useSelector((state) => state.article);

  // Comments Related State and Functions

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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="article text-[#24272B] bg-[#FAF2EA] font-montserrat  "
    >
      {loading ? (
        <div className="flex justify-center  items-center mt-[2rem] ">
          <MyLoader className=" px-8 w-full h-full  sm:w-[30rem] lg:w-[40rem]" />
        </div>
      ) : (
        <div>
        <div className=" flex flex-col text-center items-center px-4 pb-6  ">
          <motion.div
            className=" flex flex-col text-center items-center"
            variants={headingVariants}
          >
            <MenuBookIcon fontSize="large" className="mt-8 lg:!text-12" />
            <h1 className=" text-2xl py-1  font-bold mt-2 sm:text-3xl sm:px-5 lg:text-4xl">
              {articleTitle}
            </h1>
            <p className=" italic text-lg mt-2 w-4/5 sm:text-2xl lg:my-3">
              {shortDesc}
            </p>
            <span className="bg-[#F26419] text-white font-semibold text-left rounded-[10px] mt-[12px]  max-h-8 w px-2 sm:text-xl lg:text-[1.5rem] lg:px-4">
              <Link
                to={`/categories/${categories ? categories[0].slug : null}`}
              >
                # {categories ? categories[0].categoryName : null}
              </Link>{" "}
            </span>

            {categories && categories[1] ? (
              <span className="bg-[#F26419] text-white font-semibold text-left rounded-[10px] mt-[10px]  max-h-8 w px-2 sm:text-xl lg:text-[1.5rem] lg:px-4]">
                <Link
                  to={`/categories/${categories ? categories[1].slug : null}`}
                >
                  # {categories ? categories[1].categoryName : null}
                </Link>{" "}
              </span>
            ) : (
              ""
            )}

            <span className="text-lg mt-2 lg:text-xl">
              {estimateTime(`${articleContent}`)}{" "}
            </span>
            <motion.div
              variants={headingVariants}
              className="  w-full mt-4 md:px-[5rem] lg:px-[7rem] "
            >
              <img
                className="object-cover min-h-full max-h-[400px] w-full"
                src={`http://192.168.29.80:1337${coverImage?.url}`}
                alt=""
              />
            </motion.div>

            <motion.div
              variants={headingVariants}
              className="flex items-center justify-space-between space-x-16 mt-6"
            >
              <div className="flex flex-col justify-evenly items-center">
                <Avatar className="lg:!h-16 lg:!w-16">
                  {firstLetter(`${author}`)}
                </Avatar>
                <span className=" text-[16px] font-medium mt-2 sm:text-xl lg:text-2xl">
                  {author}
                </span>
              </div>
              <span className="font-medium text-lg sm:text-xl lg:hidden">
                {dateParser(`${updatedAt}`)}
              </span>
            </motion.div>

            {/* Share Icons */}
            <motion.div
              variants={headingVariants}
              className=" flex justify-evenly space-x-4 mt-5 border-b-2 border-[#24272B] pb-3 lg:hidden"
            >
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
                media={`http://192.168.29.80:1337/${coverImage?.url}`}
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
            </motion.div>
            {/* -------------- */}

            <motion.div variants={headingVariants} className="lg:flex">
              {/* Share Icons */}
              <div className="hidden flex-col items-center lg:flex px-12 w-[45rem] space-y-4 ml-[140px] mr-[38px] ">
                <span className="font-bold  text-3xl mb-6  ">
                  {dateParser(`${updatedAt}`)}
                </span>
                <FacebookShareButton
                  url={`https://localhost:1337alllArticles/${articleId}`}
                  quote={`Just found out this amazing article on Blogtastic`}
                  hashtag="test"
                >
                  <FacebookIcon className="!text-[2.5rem]" />
                </FacebookShareButton>

                <TwitterShareButton
                  url={`https://localhost:1337alllArticles/${articleId}`}
                  title={articleTitle}
                >
                  <TwitterIcon className="!text-[2.5rem]" />
                </TwitterShareButton>

                <PinterestShareButton
                  url={`https://localhost:1337alllArticles/${articleId}`}
                  description={shortDesc}
                  media={`http://192.168.29.80:1337/${coverImage?.url}`}
                >
                  <PinterestIcon className="!text-[2.5rem]" />
                </PinterestShareButton>

                <EmailShareButton
                  url={`https://localhost:1337alllArticles/${articleId}`}
                  subject={articleTitle}
                  body={`Just found out this amazing article on Blogtastic \n \n ${articleContent}`}
                >
                  <EmailIcon className="!text-[2.5rem]" />
                </EmailShareButton>

                <WhatsappShareButton
                  url={`https://localhost:1337alllArticles/${articleId}`}
                  title={articleTitle}
                >
                  <WhatsAppIcon className="!text-[2.5rem]" />
                </WhatsappShareButton>
              </div>
              {/* -------------- */}
              
              <div className='prose text-left text-lg px-2 prose leading-8 mt-8  pb-4  sm:text-2xl sm:leading-[3rem] lg:pr-[96px]'>
              {parse(`${articleContent}`)}

              </div>
            </motion.div>
          </motion.div>

          <span className="border-b-2 border-[#24272B] w-full"></span>

        </div>
       <Comments/>

        </div>
     )
     
     
     }

    </motion.div>
  );
};

export default Article;
