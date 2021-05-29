import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import Icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
// Redux
import { useSelector } from "react-redux";

const Navbar = () => {
  // Access State
  const articles = useSelector((state) => state.allArticles.articles);

  // Expanding on mobile
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleMenu = () => {
    setOpen(!open);
    setSearchTerm("");
  };

  return (
    <div className="Navbar font-montserrat ">
      <div className="bg-braintree flex justify-between items-center p-8 h-20">
        <div>
          <h1 className="text-xl text-white font-medium sm:text-2xl">
            Blogtastic
          </h1>
        </div>
        <MenuIcon
          onClick={handleMenu}
          fontSize="large"
          className=" text-white cursor-pointer "
        />
      </div>
      {open ? (
        <div className="bg-taupe h-screen w-full p-5  fixed top-0 z-10 ">
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

            <div className="flex flex-col justify-start items-center  space-y-3">
              <div className="flex flex-col justify-center items-center space-y-5 relative ">
                {articles
                  .filter((article) => {
                    const title = article.articleTitle.toLowerCase();
                    const term = searchTerm.toLowerCase();
                    if (searchTerm === "") {
                      return null;
                    } else if (title.includes(term)) {
                      return article;
                    }
                    return false;
                  })
                  .map((article) => {
                    return (
                      <div key={article._id}>
                        <Link to={`/articles/${article._id}`}>
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

              <span className="sm:text-2xl" onClick={handleMenu}>
                <Link to="/">Home</Link>
              </span>
              <span className="sm:text-2xl" onClick={handleMenu}>
                <Link to="/allArticles/"> All Articles</Link>
              </span>
              <span className="sm:text-2xl">About Me</span>
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
