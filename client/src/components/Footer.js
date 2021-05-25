import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bg-gray-500 flex flex-col items-center mt-2 pb-8 w-screen p-2 space-y-5">
        <div className=" flex justify-center items-center mt-4 space-x-5">
          <a href="https://github.com/zoharkiks/" target="_blank" rel='noreferrer'>
            <GitHubIcon className="text-white" />
          </a>

          <a href="https://www.linkedin.com/in/zoharwilliams/" target="_blank" rel='noreferrer'>
            <LinkedInIcon className="text-white" />
          </a>

          <a href="mailto:zoharkiks">
            <EmailIcon className="text-white" />
          </a>

          <a href="https://www.instagram.com/zoharkiks/?hl=en" target="_blank" rel='noreferrer'>
            <InstagramIcon className="text-white" />
          </a>
        </div>
        <span className="text-white mt-3">Sign Up for Awesome Newsletters</span>
        <form action="" className="relative mt-3">
          <input
            type="text"
            name=""
            className="bg-gray-300 rounded-xl pl-4 py-1 outline-none mb-5 "
            placeholder="Your Email"
          />
          <button
            type="submit"
            className="text-white focus:outline-none text-sm focus:ring focus:border-blue-300 absolute h-8 right-0 p-1 rounded-r-xl bg-gray-400"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
