import React, { useState } from "react";
import {Link} from 'react-router-dom'
// Import Icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";


const Navbar = () => {
  // Expanding on mobile
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="Navbar font-montserrat ">
      <div className="bg-braintree flex justify-between items-center p-8 h-20 w-screen ">
        <div>
          <h1 className="text-xl text-white font-medium">Zohar Williams</h1>
        </div>
        <MenuIcon
          onClick={handleMenu}
          fontSize="large"
          className=" text-white cursor-pointer "
        />
      </div>
      {open ? (
        <div className="bg-taupe h-screen w-screen p-5  fixed top-0 z-10 ">
          <div className="bg-white w-full h-full flex  flex-col justify-start items-center pt-20 p-3 relative ">
            <CloseIcon
              onClick={handleMenu}
              className="absolute top-1 right-3 "
            />
            <div className="relative">
              <input
                type="text"
                name=""
                className="bg-gray-300 rounded-xl pl-5 py-1 outline-none mb-5 "
                placeholder="Search..."
              />
              <SearchIcon className="absolute right-1 top-1 text-white" />
            </div>
            <div className="flex flex-col justify-start items-center space-y-3">
              <span onClick={handleMenu}><Link to='/'>Home</Link></span>
              <span onClick={handleMenu}><Link to='/allArticles/'> All Articles</Link></span>
              <span>About Me</span>
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
