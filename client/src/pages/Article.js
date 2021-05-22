import React from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, PinterestShareButton,PinterestIcon } from "react-share";

const Article = () => {
  return (
    <div className="article">
      <div className="bg-yellow-200 py-3  flex flex-col items-center font-montserrat font-medium space-y-4">
        <span>------</span>
        <h1 className="text-center text-lg px-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <span>------</span>
        <p className="text-center italic font-normal px-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic maxime
          nobis, sapiente expedita cum quae modi possimus blanditiis vero rerum
          ab.
        </p>
        <span className="text-center font-light text-sm ">by: AUTHOR NAME</span>
        <span className="text-center font-light text-sm">March 20, 2021</span>
        <div className=" flex justify-evenly w-1/2 ">

          <FacebookShareButton url='https://www.google.com/' quote="Test" hashtag="test">
            <FacebookIcon size='32' round={true} />
          </FacebookShareButton>

          <TwitterShareButton>
              <TwitterIcon size='32' round={true}/>
          </TwitterShareButton>

          <PinterestShareButton>
              <PinterestIcon size='32' round={true}/>
          </PinterestShareButton>

        </div>

        <div className="bg-green-300 h-56 ">
          <img
            className=" w-full h-full object-cover"
            src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"
            alt=""
          />
        </div>
        <p className="text-left font-normal text-base px-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
          reprehenderit, consectetur officia voluptate, soluta atque similique
          deserunt aliquid quaerat excepturi mollitia. Doloribus dolores
          explicabo similique aut, quidem laboriosam animi fugiat. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Reiciendis minus
          voluptates eaque repellat omnis fuga tempore adipisci laborum
          consequuntur aspernatur, atque porro est iste accusamus nulla,
          delectus rem voluptatibus aliquid?
        </p>
      </div>
    </div>
  );
};

export default Article;
