import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Import Components
import CommentCard from "./CommentCard";
import axios from "axios";

// Import Icons
import CloseIcon from "@material-ui/icons/Close";

// Import Loader
import ClipLoader from "react-spinners/ClipLoader";

// Import Helper
import { clearComment, clearInput } from "../helpers/clearInput";
import { fetchComments, handleLogin, handleRegister, submitComment } from "../helpers/api";


const Comments = () => {
  // States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [login, setLogin] = useState(false);
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Pagination
  const [page, setPage] = useState(5);
  const showMore = () => {
    setPage((prevValue) => prevValue + 5);
  };

  // Fetching Articles
  const articleId = useSelector((state) => state.article._id);
  useEffect(() => {
    tokenCheck();
    fetchComments(articleId,setComments);
  }, []);

  // JWT Check
  const tokenCheck = () => {
    localStorage.getItem("token") ? setLogin(true) : setLogin(false);
  };

 
  //  Log In
  const viewLogin = () => {
    setLoginVisible(!loginVisible);
    setError(false);
  };

  // LogOut
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    tokenCheck();
    setLoginVisible(false);
  };

  // SignUp
  const viewSignUp = () => {
    setRegisterVisible(!registerVisible);
    setError(false);
  };


  // ************************************** //
  return (
    <div className="comments font-montserrat relative">
      <div className="flex flex-col px-4 pb-6 font-bold text-xl mt-1 sm:pl-[50px] sm:pr-[30px]  lg:pl-[170px] lg:pr-[60px]">
        <h1 className="sm:text-2xl p-[2px] lg:text-4xl lg:font-bold ">
          Share Your Thoughts
        </h1>
        {!login ? (
          <div className="bg-[#BA274A] px-4 py-3 min-w-content mr-auto  rounded-[10px] mt-5 sm:h-[6rem] sm:py-7 lg:mx-0 lg:mb-[64px]">
            <span className="font-medium text-white sm:my-auto lg:text-[28px] lg:font-bold">
              Please{" "}
              <span className="text-[#F26419] cursor-pointer" onClick={viewLogin}>
                Log In
              </span>{" "}
              {loginVisible ? (
                <div className="bg-clip-padding backdrop-filter backdrop-blur-[4px] bg-opacity-[25%] border border-gray-200 bg-white h-full flex flex-col w-full justify-center  items-center fixed top-0 left-0 z-[1]">
                  <div
                    
                    className="bg-[#F26419] rounded-[10px]  w-[280px] h-[340px] relative z-[1]  sm:w-[340px] sm:h-[400px] lg:w-[80%] lg:grid lg:grid-cols-2"
                  >
                    <CloseIcon
                      onClick={viewLogin}
                      className="absolute top-2 right-[10px] text-[#F1DAC4] sm:!text-[2rem] "
                    />
                    <div className="flex flex-col  items-center">
                      <h2 className="font-bold text-2xl p-[2px]  mt-7 mb-9 sm:text-[28px] lg:text-4xl">
                        Please Login
                      </h2>
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username/Email"
                        type="text"
                        className="h-[39px] w-[217px] bg-[#BA274A] placeholder-white rounded-[10px] px-3 font-bold text-[16px] sm:h-[50px] sm:text-lg "
                      ></input>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                        className="h-[39px] w-[217px] my-6 bg-[#BA274A] placeholder-white rounded-[10px] px-3 font-bold text-[16px] sm:h-[50px] sm:text-lg "
                      ></input>

                      <button
                        onClick={()=>handleLogin(setLoading,password,username,email,setError,clearInput,tokenCheck)}
                        className="bg-white text-black w-[100px]  h-[40px] rounded-[10px] font-bold text-lg sm:w-[110px]  sm:h-[50px] sm:text-[20px]"
                      >
                        {!loading ? (
                          "Log In"
                        ) : (
                          <ClipLoader
                            color={"#fffff"}
                            loading={loading}
                            size={25}
                          />
                        )}
                      </button>
                      {error ? (
                        <span className="text-lg mt-2 sm:text-xl sm:mt-4">
                          Please re-check the details
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="hidden lg:flex flex-col justify-center items-center italic p-8 ">
                      <span className='font-bold text-4xl p-4'>
                        “The creative adult is the child who survived.” -Dieter
                        F. Uchtdorf
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              Or{" "}
              <span className="text-[#F26419] cursor-pointer " onClick={viewSignUp}>
                Sign Up
              </span>{" "}
              {registerVisible ? (
                <div className="bg-clip-padding backdrop-filter backdrop-blur-[4px] bg-opacity-[25%] border border-gray-200 bg-white h-full flex flex-col w-full justify-center  items-center fixed top-0 left-0 z-[1]">
                  <div className="bg-[#F26419] rounded-[10px]  w-[280px] h-[360px] relative z-[1] flex flex-col  items-center sm:w-[340px] sm:h-[430px] lg:w-[80%] lg:grid lg:grid-cols-2">
                    <CloseIcon
                      onClick={viewSignUp}
                      className="absolute top-2 right-[10px] text-[#F1DAC4] sm:!text-[2rem] "
                    />
                    <div className='flex flex-col  items-center'>
                    <h2 className="font-bold p-[2px] text-2xl mt-7 mb-9 sm:text-[28px] lg:text-4xl">
                      Please Sign Up
                    </h2>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      type="text"
                      className="h-[39px] w-[217px] bg-[#BA274A] placeholder-white rounded-[10px] px-3 font-bold text-[16px]  sm:h-[50px] sm:text-lg "
                    ></input>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      type="password"
                      className="h-[39px] w-[217px] my-4 bg-[#BA274A] placeholder-white rounded-[10px] px-3 font-bold text-[16px]  sm:h-[50px] sm:text-lg "
                    ></input>

                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      type="email"
                      className="h-[39px] w-[217px] mb-6 bg-[#BA274A] placeholder-white rounded-[10px] px-3 font-bold text-[16px]  sm:h-[50px] sm:text-lg "
                    ></input>

                    <button
                      onClick={()=> handleRegister(setLoading, password,email,username,setError,clearInput,tokenCheck)}
                      className="bg-white text-black w-[100px]  h-[40px] rounded-[10px] font-bold text-lg sm:w-[110px]  sm:h-[50px] sm:text-[20px]"
                    >
                      {!loading ? (
                        "Sign Up"
                      ) : (
                        <ClipLoader
                          color={"#fffff"}
                          loading={loading}
                          size={25}
                        />
                      )}
                    </button>
                    {error ? (
                      <span className="text-lg mt-2 sm:text-xl sm:mt-4">
                        Please re-check the details
                      </span>
                    ) : (
                      ""
                    )}
                    
                  </div>
                  <div className="hidden lg:flex flex-col justify-center items-center italic p-8 ">
                      <span className='font-bold text-4xl p-4'>
                      "You can't use up creativity. The more you use the more you have." -- Maya Angelou
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              to comment
            </span>
          </div>
        ) : (
          <div className="bg-[#BA274A] rounded-[10px] px-6 py-[18px] flex flex-col mt-5">
            <h2 className="font-bold text-[16px] text-white sm:text-xl">
              {`What's on your mind, ${localStorage.getItem("user")}?`}
            </h2>

            <textarea
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type Here..."
              type="text"
              className="h-[98px] break-words placeholder-black rounded-[10px] pt-2 px-3 font-bold text-[16px] my-4 sm:text-xl"
            ></textarea>
            <div className="flex justify-between">
              <button
                onClick={()=>submitComment(setLoading,content,articleId,setComments,clearComment,setContent)}
                disabled={content.length < 2}
                className={`${
                  content.length < 2 ? "bg-gray-700" : ""
                } bg-white w-[100px] h-[40px] mx-auto rounded-[10px] font-bold text-xl`}
              >
                {!loading ? (
                  "Post"
                ) : (
                  <ClipLoader color={"#fffff"} loading={loading} size={25} />
                )}
              </button>

              <button
                onClick={handleLogout}
                className="bg-white w-[100px] h-[40px] mx-auto rounded-[10px] font-bold text-xl"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
      {comments.length > 0 ? (
        <>
          {" "}
          {comments.slice(0, page).map((comment) => (
            <CommentCard
              key={comment.id}
              content={comment.content}
              date={comment.createdAt}
              author={comment.author.username}
            />
          ))}
          {comments.length > 5 ? (
            <button
              onClick={showMore}
              className="bg-[#F26419] text-white w-[160px] h-[40px] mx-4 my-4 rounded-[10px] font-bold text-[16px] sm:ml-[50px] sm:w-[180px] sm:h-[50px] lg:ml-[170px] lg:h-[65px] lg:w-[200px] lg:text-[20px]"
            >
              More Comments
            </button>
          ) : (
            ""
          )}
        </>
      ) : (
        <span className="px-6 my-4 font-bold text-xl">
          Be the first to comment
        </span>
      )}
    </div>
  );
};

export default Comments;
