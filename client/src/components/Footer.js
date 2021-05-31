import React, { useEffect, useState } from "react";

// Import Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="footer">
      <div className="bg-braintree flex flex-col items-center pb-8 p-2 space-y-5 lg:flex-row lg:justify-evenly lg:items-center">
        {/* Icons */}
        <div className=" flex justify-center items-center mt-4 space-x-5">
          <a
            href="https://github.com/zoharkiks/"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="text-white sm:!text-4xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/zoharwilliams/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="text-white sm:!text-4xl" />
          </a>

          <a href="mailto:zoharkiks">
            <EmailIcon className="text-white sm:!text-4xl" />
          </a>

          <a
            href="https://www.instagram.com/zoharkiks/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="text-white sm:!text-4xl" />
          </a>
        </div>
        {/* ------------------------- */}

        <span className="text-white mt-3 sm:text-xl">
          Sign Up for Awesome Newsletters
        </span>
        <form action="" className="relative mt-3">
          <input
            type="text"
            name=""
            className="bg-gray-300 rounded-xl pl-4 py-1 outline-none sm:px-8 sm:py-2 lg:mb-0  "
            placeholder="Your Email"
          />
          <button
            type="submit"
            className="text-white focus:outline-none text-sm focus:ring focus:border-blue-300 absolute h-8 right-0 p-1 px-2 rounded-r-xl bg-gray-400 sm:h-10"
          >
            Sign Up
          </button>
        </form>
        
        {visible ? (
          <ArrowUpwardRoundedIcon
            onClick={scrollToTop}
            className=" fixed rounded-full right-[20px] bottom-[30px] bg-illusion border-2 border-white h-4 w-4 !text-[2.5rem] sm:!text-[3.5rem] lg:hidden"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Footer;
