import React from "react";

// Import Icons and Avatar
import Avatar from "@material-ui/core/Avatar";
// Import Utils
import { commentDate } from "../helpers/date.js";
import firstLetter from "../helpers/firstLetter";

function CommentCard({author,content,date}) {
  return (
    <div className="commentCard">
      <div className=" flex flex-col px-6">
        <div className="flex ">
          <Avatar className=""> {firstLetter(`${author}`)}</Avatar>
          <div className="flex-flex-col px-[10px]">
            <h2 className="font-medium text-lg">{author}</h2>
            <h2 className="font-medium text-[14px]">{commentDate(date)}</h2>
          </div>
        </div>
        <p className="font-light text-lg pl-[50px]">
          {content}
        </p>    
        <span className="border-b-2 mx-auto border-[#24272B] w-full my-4"></span>
      </div>
    </div>
  );
}

export default CommentCard;
