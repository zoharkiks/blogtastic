import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// Import Icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
// Redux
import { useSelector } from "react-redux";
// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  // Access State
  const articles = useSelector((state) => state.allArticles.articles);

  // Params
  const clear = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setSearchTerm("");
  };

  // Expanding on mobile
  const [open, setOpen] = useState(false);
  // Search Terms
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(true);

  const handleMenu = () => {
    setOpen(!open);
    clear();
  };

  // Animation Variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 1.2,
    },

    visible: {
      opacity: 1,
      scale: 1,
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
      scale: 1.2,
    },

    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "tween" },
    },
  };

  const searchVariants = {
    hidden: {
      y: -1000,
      transition: { type: "tween", duration: 0.5 },
    },
    visible: {
      opacity: 1,

      y: 0,
      transition: { type: "tween", duration: 0.5 },
    },

    searchResultsHidden: {
      opacity: 0,
      x: -1000,
      transition: { type: "tween", duration: 0.5 },
    },

    searchResultsVisible: {
      opacity: 1,
      x: 1,
      transition: { type: "tween", duration: 0.5 },
    },

    searchResultsExit: {
      opacity: 0,
      transition: { type: "tween", duration: 0.5 },
    },
  };



  return (
    <div className="Navbar font-montserrat ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-[#24272B] flex justify-between items-center px-4 py-2 h-20 lg:px-7"
      >
        <motion.h1
          variants={headingVariants}
          className="text-3xl text-[#F1DAC4] py-2 font-semibold sm:text-4xl "
        >
          {" "}
          <Link onClick={clear} to="/">
            Blogtastic
          </Link>
        </motion.h1>

        <div className="relative hidden lg:flex">
          <input
            type="text"
            name=""
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            className="bg-[#7699D4] placeholder-white text-white font-medium rounded-3xl pl-5 py-2 px-8 outline-none "
            placeholder="Search..."
          />
          <SearchIcon className="absolute right-1 top-1 text-white sm:top-2 sm:right-2" />
        </div>
        <AnimatePresence>
          {searchTerm && searchTerm.length >= 2 ? (
            <motion.div
              variants={searchVariants}
              initial="searchResultsHidden"
              animate="searchResultsVisible"
              exit="searchResultsExit"
              className="bg-[#355EA4] top-[4.5rem] left-[16rem] min-h-[11rem] w-[32rem] absolute py-4 rounded-xl border-gray-200 max-h-[19rem]  hidden lg:inline z-20 "
            >
              <div className="flex flex-col justify-start items-center  space-y-3 relative ">
                <span className="text-2xl mt-2 text-left ml-6 w-full text-white">
                  Your search results:
                </span>
                {articles
                  .filter((article) => {
                    const title = article.articleTitle.toLowerCase();
                    const term = searchTerm.toLowerCase();
                    if (searchTerm === "") {
                      return null;
                    } else if (title.includes(term) && term.length >= 2) {
                      return article;
                    }
                    return false;
                  })
                  .map((article) => {
                    return (
                      <div className="w-full" key={article._id}>
                        <Link to={`/articles/${article.slug}`}>
                          <div
                            className="border-b-2 border-white font-medium  py-4 space-y-2 text-white text-xl flex flex-col  justify-center items-center text-center sm:text-2xl"
                            onClick={handleMenu}
                          >
                            <h1>{article.articleTitle}</h1>
                            <img
                              className="rounded-full h-24 w-24"
                              src={`http://192.168.29.80:1337${article?.coverImage?.url}`}
                            />
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
        <motion.span
          variants={headingVariants}
          className="text-2xl font-bold text-[#F5DEC8] hidden lg:inline"
          onClick={clear}
        >
          <Link to="/allArticles/"> All Articles</Link>
        </motion.span>
        <motion.span
          variants={headingVariants}
          className="text-2xl font-bold text-[#F5DEC8] hidden lg:inline"
          onClick={clear}
        >
          <Link to="/about-me">About Me</Link>
        </motion.span>

        {/* -----------------------MOBILE NAVIGATION-------------------- */}

        <motion.div variants={headingVariants} className="lg:hidden">
          <MenuIcon
            onClick={handleMenu}
            className=" text-[#F1DAC4] !text-[45px] sm:!text-[60px] "
          />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {open ? (
          <motion.div
            variants={searchVariants}
            animate={open ? "visible" : ""}
            initial="hidden"
            exit="hidden"
            className="bg-[#7699D4] px-7 h-screen w-full  fixed top-0 z-10 lg:hidden "
          >
            <div className="bg-[#9448BC] z-10 rounded-xl py-8 mt-5 w-full flex h-72 flex-col justify-start items-center pt-10 p-3 sm: ">
              <CloseIcon
                onClick={handleMenu}
                className="absolute top-6 right-8 text-[#F1DAC4] sm:!text-[2rem] "
              />
              <div className="relative ">
                <input
                  type="text"
                  name=""
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                  className="bg-[#F26419] text-[#F1DAC4] placeholder-[#F1DAC4] h-9 font-medium rounded-3xl mb-10 pl-5 py-1 outline-none sm:w-80 sm:text-[20px] "
                  placeholder="Search..."
                />
                <SearchIcon className="absolute right-2 top-1 text-white sm:top-1.5 sm:right-2" />
              </div>
              <AnimatePresence>
                {searchTerm && searchTerm.length >= 2 ? (
                  <motion.div
                    variants={searchVariants}
                    initial="searchResultsHidden"
                    animate="searchResultsVisible"
                    exit="searchResultsExit"
                    className="bg-[#F1DAC4] top-[6.5rem] min-h-[11rem] w-[19rem] absolute py-2 rounded-xl border-gray-200 max-h-[19rem] sm:w-[30rem]"
                  >
                    <div className="flex flex-col justify-start items-center  space-y-3">
                      <div className="flex flex-col justify-center items-center space-y-5 relative ">
                        {articles
                          .filter((article) => {
                            const title = article.articleTitle.toLowerCase();
                            const term = searchTerm.toLowerCase();
                            if (searchTerm === "") {
                              return null;
                            } else if (
                              title.includes(term) &&
                              term.length >= 2
                            ) {
                              
                              return article;
                            }
                            return false;
                          })
                          .map((article) => {
                            return (
                              <div className="w-full" key={article._id}>
                                <Link to={`/articles/${article.slug}`}>
                                  <div
                                    className="border-b-2 border-[#24272B] font-medium p-2 space-y-2 text-[#24272B] text-xl flex flex-col w-full  justify-center items-center text-center sm:text-2xl"
                                    onClick={handleMenu}
                                  >
                                    <h1>{article.articleTitle}</h1>
                                    <img
                                      className="rounded-full h-20 w-20"
                                      src={`http://192.168.29.80:1337${article?.coverImage?.url}`}
                                    />
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  ""
                )}
              </AnimatePresence>

              <div className="flex flex-col text-[#F1DAC4] font-bold text-2xl items-center space-y-2 overflow-hidden sm:text-[1.65rem] ">
                <span className="" onClick={handleMenu}>
                  <Link to="/">Home</Link>
                </span>
                <span className="" onClick={handleMenu}>
                  <Link to="/allArticles/"> All Articles</Link>
                </span>
                <span className="" onClick={handleMenu}>
                  <Link to="/about-me">About Me</Link>
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
