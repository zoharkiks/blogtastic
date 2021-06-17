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
import {clearInput} from '../helpers/clearInput'

const Comments = () => {
  // States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
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
  const fetchComments = async (id) => {
    await axios
      .get(
        `http://192.168.29.80:1337/comments?article=${id}&_sort=updatedAt:DESC`
      )
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
  const submitComment = async () => {
    setLoading(true);
    await axios
      .post(
        "http://192.168.29.80:1337/comments",
        {
          content,
          article: articleId,
        },
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() =>
        fetch(
          `http://192.168.29.80:1337/comments?article=${articleId}&_sort=updatedAt:DESC`
        )
          .then((res) => res.json())
          .then((val) => setComments(val))
      );

    clearInput()
    setContent("");
    setLoading(false);
  };

  //  Log In
  const viewLogin = () => {
    setLoginVisible(!loginVisible);
    setError(false)

  };

  const handleLogin = async () => {
    setLoading(true);
    await axios
      .post("http://192.168.29.80:1337/auth/local", {
        password: password,
        identifier: username || email,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.jwt);
        localStorage.setItem("user", res.data.user.username);
        setError(false)
      }).catch(err =>{
        if(err.response){
          setError(true)
          clearInput()
        }
      })

    tokenCheck();
    setLoading(false);

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
    setError(false)
  };

  const handleRegister = async () => {
    setLoading(true);
    await axios
    .post(
      "http://192.168.29.80:1337/auth/local/register",
      {
        password: password,
        email,
        username: username
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    ).then((res) => {
      localStorage.setItem("token", res.data.jwt);
      localStorage.setItem("user", res.data.user.username);
    })
    .catch(err =>{
      console.log(err.response);
      if(err.response){
        setError(true)
        clearInput()
      }
    })
    tokenCheck();
    setLoading(false);
  };

  // ************************************** //
  return (
    <div className="comments font-montserrat relative">
      <div className="flex flex-col px-4 pb-6 font-bold text-xl mt-1">
        <h1>Share Your Thoughts</h1>
        {!login ? (
          <div className="bg-[#BA274A] px-4 py-3  rounded-[10px] mt-5">
            <span className="font-medium text-white ">
              Please{" "}
              <span className="text-[#F26419]" onClick={viewLogin}>
                Log In
              </span>{" "}
              {loginVisible ? (
                <div className="bg-clip-padding backdrop-filter backdrop-blur-[4px] bg-opacity-[25%] border border-gray-200 bg-white h-full flex flex-col w-full justify-center  items-center fixed top-0 left-0 z-[1]">
                  <div className="bg-[#F26419] rounded-[10px]  w-[280px] h-[324px] relative z-[1] flex flex-col  items-center">
                    <CloseIcon
                      onClick={viewLogin}
                      className="absolute top-2 right-[10px] text-[#F1DAC4] sm:!text-[2rem] "
                    />
                    <h2 className="font-bold text-2xl mt-7 mb-9">
                      Please Login
                    </h2>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username/Email"
                      type="text"
                      className="h-[39px] w-[217px] bg-[#BA274A] placeholder-white rounded-[10px] px-3 font-bold text-[16px] "
                    ></input>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      type="password"
                      className="h-[39px] w-[217px] my-6 bg-[#BA274A] placeholder-white rounded-[10px] px-3 font-bold text-[16px] "
                    ></input>
                    
                    <button
                      onClick={handleLogin}
                      className="bg-white text-black w-[100px]  h-[40px] rounded-[10px] font-bold text-lg"
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
                    {error?<span className="text-lg mt-2">Please re-check the details</span> : ""}
                  </div>
                </div>
              ) : (
                ""
              )}
              Or{" "}
              <span className="text-[#F26419]" onClick={viewSignUp}>
                Sign Up
              </span>{" "}
              {registerVisible ? (
                <div className="bg-clip-padding backdrop-filter backdrop-blur-[4px] bg-opacity-[25%] border border-gray-200 bg-white h-full flex flex-col w-full justify-center  items-center fixed top-0 left-0 z-[1]">
                  <div className="bg-[#F26419] rounded-[10px]  w-[280px] h-[360px] relative z-[1] flex flex-col  items-center">
                    <CloseIcon
                      onClick={viewSignUp}
                      className="absolute top-2 right-[10px] text-[#F1DAC4] sm:!text-[2rem] "
                    />
                    <h2 className="font-bold text-2xl mt-7 mb-9">
                      Please Sign Up
                    </h2>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      type="text"
                      className="h-[39px] w-[217px] bg-[#BA274A] placeholder-white rounded-[10px] px-3 font-bold text-[16px] "
                    ></input>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      type="password"
                      className="h-[39px] w-[217px] my-4 bg-[#BA274A] placeholder-white rounded-[10px] px-3 font-bold text-[16px] "
                    ></input>

                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      type="email"
                      className="h-[39px] w-[217px] mb-6 bg-[#BA274A] placeholder-white rounded-[10px] px-3 font-bold text-[16px] "
                    ></input>

                    <button
                      onClick={handleRegister}
                      className="bg-white text-black w-[100px]  h-[40px] rounded-[10px] font-bold text-lg"
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
                    {error?<span className="text-lg mt-2">Please re-check the details</span> : ""}
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
            <h2 className="font-bold text-[16px] text-white">
              {`What's on your mind, ${localStorage.getItem("user")}?`}
            </h2>

            <input
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type Here..."
              type="text"
              className="h-[98px] placeholder-black rounded-[10px] pt-2 pb-[70px] px-3 font-bold text-[16px] my-4"
            ></input>
            <div className="flex justify-between">
              <button
                onClick={submitComment}
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

        <span className="border-b-2 mx-auto border-[#24272B] w-1/2 mt-5"></span>
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
              className="bg-[#F26419] text-white w-[160px] h-[40px] mx-4 mb-4 rounded-[10px] font-bold text-[16px]"
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
