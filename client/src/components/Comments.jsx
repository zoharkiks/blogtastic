import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Import Components
import CommentCard from "./CommentCard";
import axios from "axios";

const Comments = () => {
  // States
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [login, setLogin] = useState(false);
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("")

  // Fetching Articles
  const articleId = useSelector((state) => state.article._id);
  const fetchComments = async (id) => {
    await axios
      .get(`http://192.168.29.80:1337/comments?article=${id}&_sort=updatedAt:DESC`)
      .then((res) => {
        const data = res.data;
        setComments(data);
      });
  };
  // JWT Check
  const tokenCheck = () => {
    localStorage.getItem("token") ? setLogin(true) : setLogin(false);
  };

  useEffect(() => {
    tokenCheck();
    fetchComments(articleId);
  }, []);

  // Submit Comment
  const submitComment = () => {
    fetch("http://192.168.29.80:1337/comments", {
            method: "post",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYzlhMjIwZTg5YWM1MTZlODZiZmFmNSIsImlhdCI6MTYyMzg3MzcxNSwiZXhwIjoxNjI2NDY1NzE1fQ.0fl8Ab7GSXfi30KvDBUwwAl0KcU1MSCIX54J2MYARME`
            },
            body: JSON.stringify({
                content,
              
                article: articleId
            })
        }).then(() => fetch(`http://192.168.29.80:1337/comments?article=${articleId}&_sort=updatedAt:DESC`).then(res => res.json()).then(val => setComments(val)))
        Array.from(document.querySelectorAll("input")).forEach(
          (input) => (input.value = "")
        );
        setContent("");
  
      };


  //  Log In
  const viewLogin = () => {
    setLoginVisible(!loginVisible);
  };

  // SignUp
  const viewSignUp = () => {
    setRegisterVisible(!registerVisible);
  };



  return (
    <div className="comments font-montserrat">
      <div className="flex flex-col px-4 pb-6 font-bold text-xl mt-1">
        <h1>Share Your Thoughts</h1>
        {login ? (
          <div className="bg-[#BA274A] px-4 py-3  rounded-[10px] mt-5">
            <span className="font-medium text-white ">
              Please{" "}
              <span className="text-[#F26419]" onClick={viewLogin}>
                Log In
              </span>{" "}
              Or{" "}
              <span className="text-[#F26419]" onClick={viewSignUp}>
                Sign Up
              </span>{" "}
              to comment
            </span>
          </div>
        ) : (
          <div className="bg-[#BA274A] rounded-[10px] px-6 py-[18px] flex flex-col mt-5">
            <h2 className="font-bold text-[16px] text-white">
              What Are You Thinking?
            </h2>
            <input
            onChange={(e) => setContent(e.target.value)}
              placeholder="Type Here..."
              type="text"
              className="h-[98px] placeholder-black rounded-[10px] pt-2 pb-[70px] px-3 font-bold text-[16px] my-4"
            ></input>
            <button onClick={submitComment} className="bg-white w-[100px] h-[40px] mx-auto rounded-[10px] font-bold text-xl">
              Post
            </button>
          </div>
        )}
        <span className="border-b-2 mx-auto border-[#24272B] w-1/2 mt-5"></span>
      </div>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          content={comment.content}
          date={comment.createdAt}
          author={comment.author.username}
        />
      ))}
    </div>
  );
};

export default Comments;
