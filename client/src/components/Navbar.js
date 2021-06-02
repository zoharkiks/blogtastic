import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// Import Icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
// Redux
import { useSelector } from "react-redux";

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
  const [searchTerm, setSearchTerm] = useState("");

  const handleMenu = () => {
    setOpen(!open);
    clear();
  };

  return (
    <div className="Navbar font-montserrat ">
      <div className="bg-braintree flex justify-between items-center px-4 h-20 lg:px-7">
        <h1 className="text-xl text-white font-medium sm:text-2xl ">
          {" "}
          <Link onClick={clear} to="/">
            Blogtastic
          </Link>
        </h1>

        <div className="relative hidden lg:flex">
          <input
            type="text"
            name=""
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            className="bg-gray-300 rounded-3xl pl-5 py-2 px-8 outline-none "
            placeholder="Search..."
          />
          <SearchIcon className="absolute right-1 top-1 text-white sm:top-2 sm:right-2" />
        </div>

        {searchTerm && searchTerm.length >= 2 ?  (
          <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-xl border-gray-200 absolute max-h-[20rem] w-1/2 top-[4rem] left-[9rem]  hidden lg:inline z-10 ">
            <div className="flex flex-col justify-center items-center space-y-5 relative xl:space-y-2 ">
              <span className="text-2xl mt-2 text-left w-full ml-20 text-white">
                Your search results:
              </span>
              {articles
                .filter((article) => {
                  const title = article.articleTitle.toLowerCase();
                  const term = searchTerm.toLowerCase();
                  if (searchTerm === "") {
                    return null;
                  } else if (title.includes(term) && term.length >=2 ) {
                    return article;
                  }
                  return false;
                })
                .map((article) => {
                  return (
                    <div key={article._id} className="py-2">
                      <Link to={`/articles/${article.slug}`} onClick={clear}>
                        <div className="bg-illusion p-4 text-white rounded-full text-xl flex flex-col justify-center items-center text-center sm:text-2xl">
                          <h1>{article.articleTitle}</h1>
                          <span className="text-center font-light text-sm sm:text-lg ">
                            by: {article.author}
                          </span>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          ""
        )}

        <span className="text-xl text-white hidden lg:inline" onClick={clear}>
          <Link  to="/allArticles/"> All Articles</Link>
        </span>
        <span className="text-xl text-white hidden lg:inline" onClick={clear}><Link to='/about-me'>About Me</Link></span>

        {/* -----------------------MOBILE NAVIGATION-------------------- */}

        <div className="lg:hidden">
          <MenuIcon
            onClick={handleMenu}
            fontSize="large"
          className=" text-white cursor-pointer "
          />
        </div>
      </div>
      {open ? (
        <div className="bg-taupe h-screen w-full p-5 fixed top-0 z-10 lg:hidden ">
          <div className="bg-white w-full flex min-h-2/3 flex-col justify-start items-center pt-10 p-3 relative ">
            <CloseIcon
              onClick={handleMenu}
              className="absolute top-1 right-3 "
            />
            <div className="relative ">
              <input
                type="text"
                name=""
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                className="bg-gray-300 rounded-xl pl-5 py-1 outline-none mb-5 sm:py-3 sm:px-8 sm:rounded-3xl sm:text-lg"
                placeholder="Search..."
              />
              <SearchIcon className="absolute right-1 top-1 text-white sm:top-4 sm:right-2" />
            </div>
            {searchTerm && searchTerm.length >=2 ? (
              <div className='bg-clip-padding bg-gray-400 backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-xl p-3 my-2 border-gray-200 max-h-[15rem] sm:w-[30rem]'>
                <div className="flex flex-col justify-start items-center  space-y-3">
                  <div className="flex flex-col justify-center items-center space-y-5 relative ">
                    {articles
                      .filter((article) => {
                        const title = article.articleTitle.toLowerCase();
                        const term = searchTerm.toLowerCase();
                        if (searchTerm === "") {
                          return null;
                        } else if (title.includes(term) && term.length >=2) {
                          return article;
                        }
                        return false;
                      })
                      .map((article) => {
                        return (
                          <div key={article._id}>
                            <Link to={`/articles/${article.slug}`}>
                              <div
                                className="bg-illusion p-4 text-white rounded-full text-xl flex flex-col justify-center items-center text-center sm:text-2xl"
                                onClick={handleMenu}
                              >
                                <h1>{article.articleTitle}</h1>
                                <span className="text-center font-light text-sm sm:text-lg ">
                                  by: {article.author}
                                </span>
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

          <div className="flex flex-col items-center space-y-2">
          <span className="sm:text-2xl" onClick={handleMenu}>
              <Link to="/">Home</Link>
            </span>
            <span className="sm:text-2xl" onClick={handleMenu}>
              <Link to="/allArticles/"> All Articles</Link>
            </span>
            <span className="sm:text-2xl" onClick={handleMenu}><Link to='/about-me'>About Me</Link></span>
          </div>
            
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
