import React from "react";

// Import Icons and Avatar
import Avatar from "@material-ui/core/Avatar";
// Import Utils
import { commentDate } from "../helpers/date.js";
import firstLetter from "../helpers/firstLetter";

import ShowMoreText from 'react-show-more-text';


function CommentCard({author,content,date}) {
  return (
    <div className="commentCard">
      <div className=" flex flex-col px-6 sm:pl-[50px] sm:pr-[30px] lg:pl-[170px] lg:pr-[60px] ">
        <div className="flex lg:pl-[28px]">
          <Avatar className="sm:!h-14 sm:!w-14 sm:!text-2xl lg:!h-[66px] lg:!w-[66px] lg:!text-3xl "> {firstLetter(`${author}`)}</Avatar>
          <div className="flex-flex-col px-[20px] pt-[5px]">
            <h2 className="font-medium text-lg sm:text-xl lg:text-2xl">{author}</h2>
            <h2 className="font-medium text-[14px] sm:text-[16px] lg:text-[20px]">{commentDate(date)}</h2>
            <p className="font-light text-lg mt-2 sm:text-xl lg:text-2xl">
            <ShowMoreText
                /* Default options */
                lines={5}
                more='Show more'
                less='Show less'
                anchorClass='text-[#F26419] font-medium'
                expanded={false}
                width={320}
            >
          {content}
          </ShowMoreText>
        </p>
          </div>
        </div>
            
        <span className="border-b-2 mx-auto border-gray-300 w-full my-4 lg:mb-10 "></span>
      </div>
    </div>
  );
}

export default CommentCard;
